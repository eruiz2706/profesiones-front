import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina-alert',
  templateUrl: './pagina-alert.component.html',
  styleUrls: ['./pagina-alert.component.scss']
})
export class PaginaAlertComponent implements OnInit {

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      console.log(params.tipo);
    });
  }

}
