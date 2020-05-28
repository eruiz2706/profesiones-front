import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {

  loading: boolean = false;
  @Input() titulo: string = '';
  @Input()
  set loader(value: boolean) {
    this.loading = value;
    if (this.loading) {
      this.spinnerService.show();
    } else {
      this.spinnerService.hide();
    }
  }

  constructor(
    private spinnerService: NgxSpinnerService
  ) {
  }

  ngOnInit(): void {
  }

}
