import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.css']
})
export class CookiesComponent implements OnInit {
  show = true;

  constructor(
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.comprobarCookies();
  }

  aceptarCookies() {
    this.cookieService.set('mensajeCookiesAceptadas', 'false');
    this.show = false;
  }

  comprobarCookies() {
    if (this.cookieService.get('mensajeCookiesAceptadas') === 'false') {
      this.show = false;
    }
  }

}
