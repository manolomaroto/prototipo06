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
    this.javaScriptCode(document, 'script', 'zl-widget-s');
  }

  jqueryCode() {
    $(document).ready(() => {
      $('.parallax').parallax();
      $('.carousel.carousel-slider').carousel({fullWidth: true});
      setInterval( () => $('.carousel').carousel('next'), 15000 );
    });
  }

  javaScriptCode($_x, _s, id) {
      let js = $_x.getElementsByTagName(_s)[0];
      const fjs = $_x.getElementsByTagName(_s)[0];
      if (!$_x.getElementById(id)) {
          js = $_x.createElement(_s);
          js.id = id;
          js.src = '//platform.docplanner.com/js/widget.js';
          fjs.parentNode.insertBefore(js, fjs);
      }
  }

}
