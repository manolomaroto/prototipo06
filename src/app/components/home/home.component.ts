import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cookieValue = '';
  constructor() { }

  ngOnInit() {
    this.jqueryCode();
  }

  jqueryCode() {
    $(document).ready(() => {
      $('.parallax').parallax();
    });
  }

}
