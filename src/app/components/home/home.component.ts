import { Component, OnInit, InjectionToken } from '@angular/core';
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
    this.destroy();
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
    $(document).ready(() => {
      let js = document.getElementsByTagName(_s)[0];
      const fjs = document.getElementsByTagName(_s)[0];
      if (!document.getElementById(id)) {
          js = document.createElement(_s);
          js.id = id;
          js.src = '//platform.docplanner.com/js/widget.js';
          fjs.parentNode.insertBefore(js, fjs);
      }

    });
  }
  destroy() {
    if (document.getElementById('zl-widget-s')){
      document.getElementById('zl-widget-s').parentNode.removeChild(document.getElementById('zl-widget-s'));
    }
  }
}
