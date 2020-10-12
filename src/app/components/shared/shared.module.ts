import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { RouterModule } from '@angular/router';
import { CookiesComponent } from './cookies/cookies.component';
import { FixedBottonComponent } from './fixed-botton/fixed-botton.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    CardComponent,
    CookiesComponent,
    FixedBottonComponent,
    NavbarComponent,
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CardComponent,
    CookiesComponent,
    FixedBottonComponent,
    NavbarComponent,
    SliderComponent
  ]
})
export class SharedModule { }
