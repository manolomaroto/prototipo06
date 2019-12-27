import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit {
  @Input() post: any = {};
  constructor() { }

  ngOnInit() {
  }

}
