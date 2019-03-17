import { Component, OnInit } from '@angular/core';
declare var M: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.materializeCodeInit();
  }

  materializeCodeInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const elems = document.querySelectorAll('.collapsible');
      const instances = M.Collapsible.init(elems);
    });
  }
}
