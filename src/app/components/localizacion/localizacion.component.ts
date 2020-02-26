import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  LocalizacionService } from '../../services/localizacion.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

declare var ga: (...args: any[]) => void;
declare let $: any;

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.css']
})
export class LocalizacionComponent implements OnInit {

  localizacion: any = {};

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _localizacionService: LocalizacionService,
    public sanitizer: DomSanitizer
  ) { this.activatedRoute.params.subscribe( params => {
      this.localizacion = _localizacionService.getLocalizacion( params['id']);
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            ga('set', 'page', event.urlAfterRedirects);
            ga('send', 'pageview');
        }
        });
    });
  }


  ngOnInit() {
    this.jqueryCode();
  }

  jqueryCode() {
    $(document).ready(() => {
      $('.collapsible').collapsible();
      $('.collapsible').collapsible('open', 0);
    });
  }

}
