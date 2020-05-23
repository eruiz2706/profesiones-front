import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { FuncionesService } from 'src/app/core/services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  spinnerNombre: string = '';
  @Output() actionButton = new EventEmitter<string>();
  @Input() titulo: string = '';
  @Input() nombre: string = 'modal';
  @Input() footer: boolean = false;
  @Input() textButton: string = '';
  @Input()
  set spinner(value: boolean) {
    if (value) {
      this.spinnerService.show(this.spinnerNombre);
    } else {
      this.spinnerService.hide(this.spinnerNombre);
    }
  }

  constructor(
    private spinnerService: NgxSpinnerService,
    private funcionesServices: FuncionesService
  ) {
    this.spinnerNombre = this.funcionesServices.makeid(8);
  }

  onActionButton(): void {
    this.actionButton.emit('');
  }

  ngOnInit(): void {
  }

}
