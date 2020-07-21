import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-complite-entry',
  templateUrl: './complite-entry.component.html',
  styleUrls: ['./complite-entry.component.css']
})
export class CompliteEntryComponent implements OnInit {

  id: any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { 
    this.activatedRoute.params.subscribe( params => this.id = params);
  }

  ngOnInit() {
    console.log(this.id);
  }

}
