import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit {
  post: any = [];
  styleExp = false;
  textButton = 'Seguir leyendo';

  constructor(
    private activatedRoute: ActivatedRoute,
    private blogService: BlogService
  ) { 
    this.activatedRoute.params.subscribe( params => {
      this.blogService.getPosts().subscribe( resp => {
        const postId = (parseInt(params['id']));
        this.post = resp[postId - 1];
      });
    });
  }

  ngOnInit() {
  }

  cambiarEstilos() {
    this.styleExp = !this.styleExp;
    this.styleExp === false ? this.textButton = 'Seguir leyendo' : this.textButton = 'Cerrar';
  }

}
