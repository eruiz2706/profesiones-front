import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesiones-lista',
  templateUrl: './profesiones-lista.component.html',
  styleUrls: ['./profesiones-lista.component.scss']
})
export class ProfesionesListaComponent implements OnInit {

  public listaProfesionales: Array<number>;

  constructor() {
    this.listaProfesionales = [1, 2, 3, 4, 5, 6];
  }

  ngOnInit(): void {
  }

}
