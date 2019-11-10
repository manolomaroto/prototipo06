import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

  private placesImages: any[] = [{
    place: 'Colmenar',
    images: ['../assets/img/image1.JPG', '../assets/img/coworking-02.jpg', '../assets/img/coworking-024-web.jpg'
    , '../assets/img/despacho-001-web.jpg', '../assets/img/despacho-003-web.jpg']
  }, {
    place: 'Miraflores',
    images: ['../assets/img/despacho-miraflores06.jpg', '../assets/img/despacho-miraflores04.jpg', '../assets/img/despacho-nuevo02.JPG'
    , '../assets/img/despacho-miraflores03.jpg', '../assets/img/despacho-nuevo01.JPG', '../assets/img/despacho-nuevo03.JPG'
    , '../assets/img/sala-espera01.JPG']
  }

  ];

  constructor() {}

  getSliderImages() {
      return this.placesImages;
  }
}


