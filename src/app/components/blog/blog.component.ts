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
  postsPagination: BlogEntryModel[][] = [];
  indexPosts = 0;
  SHOWED_POSTS = 5;
  numberOfPaginations: number;
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
      resp.reverse();
      this.pagination(resp);
      this.cargando = false;
    });
  }

  navigationPagination(e) {
    if((Number(e.target.innerHTML) -1) > this.indexPosts) {
      if(this.indexPosts +1 <= this.postsPagination.length - 1){
        this.indexPosts += 1;
      }
    }
    if((Number(e.target.innerHTML) -1) < this.indexPosts) {
      if(this.indexPosts - 1 >= 0){
        this.indexPosts -= 1;
      }   
    }
    this.posts = this.postsPagination[this.indexPosts];
  }

  pagination(posts) {
    for(let i = 0; i < posts.length; i+= this.SHOWED_POSTS) {
      let arrayChunk = posts.slice(i, i + this.SHOWED_POSTS);
        this.postsPagination.push(arrayChunk);
    }
    this.numberOfPaginations = this.postsPagination.length;
    this.posts = this.postsPagination[this.indexPosts];
  }

}
