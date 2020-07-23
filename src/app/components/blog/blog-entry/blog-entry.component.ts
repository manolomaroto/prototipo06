import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blog-entry',
  templateUrl: './blog-entry.component.html',
  styleUrls: ['./blog-entry.component.css']
})
export class BlogEntryComponent implements OnInit {
  @Input() post: any = {};
  styleExp = false;
  textButton = 'Seguir leyendo';

  constructor() { }

  ngOnInit() {
  }

  cambiarEstilos() {
    this.styleExp = !this.styleExp;
    this.styleExp === false ? this.textButton = 'Seguir leyendo' : this.textButton = 'Cerrar';
  }

}
