import { Component, OnInit } from '@angular/core';
import { CardsService, Card } from '../../../services/cards.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards: Card[] = [];

  constructor( private _cardsService: CardsService) { }

  ngOnInit() {
  this.cards = this._cardsService.getCards();
  }

}
