import { Component, OnInit, ViewChild } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {

  webcheckout: any;

  @ViewChild('hardwareVideo') hardwareVideo: any;
  //_navigator = <any> navigator;
  //localStream;

  constructor() {

    const apiKey = '4Vj8eK4rloUd272L48hsrarnUA';
    const merchantId = '508029';
    const amount = 20000;
    const currency = 'COP';

    const date = new Date();
    const referenceCode = `TestIwana` + date.getHours() + '' + date.getMinutes() + '' + date.getSeconds();

    const md5 = new Md5();
    const datoskey = `${apiKey}~${merchantId}~${referenceCode}~${amount}~${currency}`;
    const productKey = md5.appendStr(datoskey).end();
    console.log(datoskey);
    console.log(productKey);
    this.webcheckout = {
      action: 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/',
      responseUrl: 'http://localhost:4200/dash-confirm',
      confirmationUrl: 'http://localhost:4200/dash-confirm',
      merchantId,
      accountId: '512321',
      amount,
      tax: '0',
      taxReturnBase: '0',
      currency,
      referenceCode,
      buyerEmail: 'eruiz2706@gmail.com',
      description: 'Pago proyecto diseño logo',
      signature: productKey,
      test: '1',
    };
  }
  
  ngOnInit(): void {
    /*const video = this.hardwareVideo.nativeElement;
    this._navigator = <any>navigator;

    this._navigator.getUserMedia = ( this._navigator.getUserMedia || this._navigator.webkitGetUserMedia
    || this._navigator.mozGetUserMedia || this._navigator.msGetUserMedia );

    this._navigator.mediaDevices.getUserMedia({video: true})
      .then((stream) => {
        this.localStream = stream;
        video.src = window.URL.createObjectURL(stream);
        video.play();
    });*/
  }

  stopStream() {
    /*const tracks = this.localStream.getTracks();
    tracks.forEach((track) => {
      track.stop();
    });*/
  }

}
