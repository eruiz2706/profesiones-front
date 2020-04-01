import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-como-funciona',
  templateUrl: './como-funciona.component.html',
  styleUrls: ['./como-funciona.component.scss']
})
export class ComoFuncionaComponent implements OnInit {

  @Input() items: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
