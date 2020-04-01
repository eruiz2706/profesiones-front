import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.home-video-play-btn').on('click', (event) => {
      event.preventDefault();
      $('.home-video-iframe-area').addClass('home-video-iframe-display');
    });

    /* when click the close btn
     disappear iframe window*/
    $('.home-video-close-btn').on('click',  (event) => {
      event.preventDefault();
      $('.home-video-iframe-area').removeClass('home-video-iframe-display');
    });

    // stop iframe if it is play while close the iframe window
    $('.home-video-close-btn').click( () => {
      $('.home-video-iframe').attr('src', $('.home-video-iframe').attr('src'));
    });

    // when click overlay area
    $('.home-video-iframe-area').on('click', (event) => {
      event.preventDefault();
      $('.home-video-iframe-area').removeClass('home-video-iframe-display');
    });

    $('.home-video-iframe-area, .home-video-iframe').on('click', (e) => {
      e.stopPropagation();
    });
  }

}
