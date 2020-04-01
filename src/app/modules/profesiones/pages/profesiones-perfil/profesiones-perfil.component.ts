import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profesiones-perfil',
  templateUrl: './profesiones-perfil.component.html',
  styleUrls: ['./profesiones-perfil.component.scss']
})
export class ProfesionesPerfilComponent implements OnInit {

  public listaSobreMi: Array<number>;
  public listaCalificaciones: Array<number>;
  public listaPortafolio: Array<number>;

  constructor() {
    this.listaSobreMi = [1, 2, 3, 4];
    this.listaCalificaciones = [1, 2, 3, 4];
    this.listaPortafolio = [1, 2, 3, 4];
  }

  ngOnInit(): void {
  }

}
