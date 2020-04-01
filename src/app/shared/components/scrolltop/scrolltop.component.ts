import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-scrolltop',
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.scss']
})
export class ScrolltopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    $(document).scroll( () => {
      if ($(window).scrollTop() > 300) {
        $('.scrollToTop').fadeIn();
      } else {
        $('.scrollToTop').fadeOut();
      }
    });


    

    $('.scrollToTop').click(() => {
      $('html, body').animate({scrollTop : 0}, 800);
      return false;
    });
  }

}
