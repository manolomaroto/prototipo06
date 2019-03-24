import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  LocalizacionService } from '../../services/localizacion.service';


@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.component.html',
  styleUrls: ['./localizacion.component.css']
})
export class LocalizacionComponent implements OnInit {

  localizacion: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private _localizacionService: LocalizacionService
  ) { this.activatedRoute.params.subscribe( params => {
      this.localizacion = _localizacionService.getLocalizacion( params['id']);
    });
  }


  ngOnInit() {
  }

}
