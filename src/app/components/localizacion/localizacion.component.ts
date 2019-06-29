import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  LocalizacionService } from '../../services/localizacion.service';
import { DomSanitizer } from '@angular/platform-browser';
declare let $: any;

@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.css']
})
export class LocalizacionComponent implements OnInit {

  localizacion: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _localizacionService: LocalizacionService,
    public sanitizer: DomSanitizer
  ) { this.activatedRoute.params.subscribe( params => {
      this.localizacion = _localizacionService.getLocalizacion( params['id']);
    });
  }


  ngOnInit() {
    this.jqueryCode();
  }

  jqueryCode() {
    $(document).ready(() => {
      $('.collapsible').collapsible();
      $('.slider').slider();
    });
  }

}
