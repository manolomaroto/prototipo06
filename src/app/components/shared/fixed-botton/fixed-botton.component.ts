import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-fixed-botton',
  templateUrl: './fixed-botton.component.html',
  styleUrls: ['./fixed-botton.component.css']
})
export class FixedBottonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.javaScriptCode();
  }

  javaScriptCode() {
    $(document).ready(() => {
      // Get the button
      const mybutton = document.getElementById('myBtn');

      // When the user scrolls down 20px from the top of the document, show the button
      window.onscroll = () => scrollFunction();

      function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
          mybutton.style.display = 'block';
        } else {
          mybutton.style.display = 'none';
        }
      }

    });
  }

}
