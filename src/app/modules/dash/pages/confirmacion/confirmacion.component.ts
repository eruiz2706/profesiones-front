import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.scss']
})
export class ConfirmacionComponent implements OnInit {

  merchantId: string = '';
  referenceCode: string = '';
  TX_VALUE: string = '';
  description: string = '';
  transactionId: string = '';
  buyerEmail: string = '';
  transactionState: string = '';
  reference_pol: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

    this.route.queryParams
    .subscribe((params: Params) => {
        this.merchantId = params.merchantId;
        this.referenceCode = params.referenceCode;
        this.TX_VALUE = params.TX_VALUE;
        this.description = params.description;
        this.transactionId = params.transactionId;
        this.buyerEmail = params.buyerEmail;
        this.transactionState = params.transactionState;
        this.reference_pol =  params.reference_pol;

        console.log(params.merchantId);
        console.log(params.referenceCode);
        console.log(params.TX_VALUE);
        console.log(params.description);
        console.log(params.transactionId);
        console.log(params.buyerEmail);
        console.log(params.transactionState);
        console.log(params.reference_pol);
      });
  }

  ngOnInit(): void {
  }

}
