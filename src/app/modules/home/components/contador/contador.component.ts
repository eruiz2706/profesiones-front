import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HomeService } from 'src/app/core/services';
import { Subscription } from 'rxjs';

declare const $: any;

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit, OnDestroy {

  public data: any;
  public subscriptionHomeServices: Subscription;

  constructor(
    private homeServices: HomeService
  ) {
    this.subscriptionHomeServices = null;
    this.data = [];
  }

  ngOnInit(): void {

    this.subscriptionHomeServices = this.homeServices.getContador$()
    .subscribe( (response) => {
      this.data = response;
    });

    var a = 0;
    $(window).scroll( () => {

      if ($('.contador-home-content').length) {
        const oTop = $('.contador-home-content').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
          $('.contador-home-value').each(function() {
              var $this = $(this),
              countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },

              {

                duration: 2000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  //alert('finished');
                }

              });
          });
          a = 1;
        }
      }
    });
  }

  ngOnDestroy(): void {
    if ( this.subscriptionHomeServices != null ) {
      this.subscriptionHomeServices.unsubscribe();
    }
 }

}
