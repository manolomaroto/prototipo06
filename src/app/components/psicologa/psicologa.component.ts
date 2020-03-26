import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

declare var ga: (...args: any[]) => void;

@Component({
  selector: 'app-psicologa',
  templateUrl: './psicologa.component.html',
  styleUrls: ['./psicologa.component.css']
})
export class PsicologaComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
          ga('set', 'page', event.urlAfterRedirects);
          ga('send', 'pageview');
      }
      });
  }

  ngOnInit() {
  }

}
