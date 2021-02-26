
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  @Input() post: any = {};
  constructor() { }

  ngOnInit() {
  }

}
