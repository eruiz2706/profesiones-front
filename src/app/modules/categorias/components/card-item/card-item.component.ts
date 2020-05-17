import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() item: any;
  @Output() opcionEdit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onEdit( item: any ) {
    this.opcionEdit.emit( item );
  }

}
