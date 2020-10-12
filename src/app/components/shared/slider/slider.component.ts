import { Component, OnInit, Input } from '@angular/core';
import { SliderService } from '../../../services/slider.service';
declare let $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliderImages: any[] = [];
  imagesSrc: any[] = [];
  @Input() localization: any = '';

  constructor( private placesImages: SliderService) {
    this.sliderImages = placesImages.getSliderImages();
   }

  ngOnInit() {
    this.jqueryCode();
    for (const onePlace of this.sliderImages) {
      if (onePlace.place === this.localization) {
        onePlace.images.forEach(element => {
          this.imagesSrc.push(element);
        });
      }
    }
  }

  jqueryCode() {
    $(document).ready(() => {
      $('.slider').slider();
    });
  }
}
