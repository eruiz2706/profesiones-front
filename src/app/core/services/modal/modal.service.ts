import { Injectable } from '@angular/core';
declare const $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  public open(id: string) {
    $(`#${id}`).modal();
  }

  public close(id: string) {
    $(`#${id}`).modal('hide');
  }
}
