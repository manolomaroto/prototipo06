import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { BlogEntryModel } from '../../models/blog.model';

declare var ga: (...args: any[]) => void;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: BlogEntryModel[] = [];
  cargando = false;

  // entry =  new BlogEntryModel();

  constructor(
    private router: Router,
    private blogService: BlogService
  ) {
    this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
    }
    });
  }

  ngOnInit() {
    this.cargando = true;
    this.blogService.getPosts().subscribe( resp => {
      this.posts = resp;
      this.posts.reverse();
      this.cargando = false;
    });
  }

}
