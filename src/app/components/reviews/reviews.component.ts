import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../../services/reviews.service';

declare let $: any;

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor( private reviewsService: ReviewsService) { }

  reviews: any[] = [];

  ngOnInit() {
    this.destroy();
    this.javaScriptCode(document, 'script', 'zl-widget-s');
/*     this.reviewsService.getReviews().subscribe( resp => {
      console.log(resp);
      this.reviews = resp;
    }); */
    this.reviews = this.reviewsService.getReviews();
  }

  javaScriptCode($_x, _s, id) {
    $(document).ready(() => {
      let js;
      const  fjs = $_x.getElementsByTagName(_s)[0];
      if (!$_x.getElementById(id)) {
        js = $_x.createElement(_s);
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
