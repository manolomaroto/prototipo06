import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../../services/cards.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

declare var ga: (...args: any[]) => void;

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.css']
})
export class EspecialidadComponent {

  especialidad: any = {};
  constructor( private router: Router,
               private activatedRoute: ActivatedRoute,
               private _cardsService: CardsService ) { 
    this.activatedRoute.params.subscribe(params => {
      this.especialidad = _cardsService.getCard( params['id']);
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
            ga('set', 'page', event.urlAfterRedirects);
            ga('send', 'pageview');
        }
        });
    });
  }
}
