import { Component, OnInit, Input } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent implements OnInit {

  @Input() items: any[];

  constructor() { }

  ngOnInit(): void {
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

}
