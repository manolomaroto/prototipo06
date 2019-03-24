import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../../services/cards.service';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent {

  especialidad: any = {};
  constructor( private activatedRoute: ActivatedRoute,
               private _cardsService: CardsService ) { 
    this.activatedRoute.params.subscribe(params => {
      this.especialidad = _cardsService.getCard( params['id']);
    });
  }
}
