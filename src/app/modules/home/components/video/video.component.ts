import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/core/services/services.index';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

declare const $: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnDestroy {

  public dataVideo: any;
  public urlSafe: SafeResourceUrl;
  public subscriptionHomeServices: Subscription;

  constructor(
    private homeServices: HomeService,
    private sanitizer: DomSanitizer
  ) {
    this.subscriptionHomeServices = null;
    this.dataVideo = {};
  }

  ngOnInit(): void {

    this.subscriptionHomeServices = this.homeServices.getVideo$()
    .subscribe( (response) => {
      this.dataVideo = response;
      this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataVideo.url_video);
    });

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

  ngOnDestroy(): void {
    if ( this.subscriptionHomeServices != null ) {
      this.subscriptionHomeServices.unsubscribe();
    }
 }

}
