import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor() { }

  public toastSuccess(titulo: string, text: string): void {
    Swal.fire({
      position: 'top',
      icon: 'success',
      title: titulo,
      text,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    });
  }

  public toastInfo(titulo: string, text: string): void {
    Swal.fire({
      position: 'top',
      icon: 'info',
      title: titulo,
      text,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    });
  }

  public toastWarning(titulo: string, text: string): void {
      Swal.fire({
        position: 'top',
        icon: 'warning',
        title: titulo,
        text,
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
      });
  }

  public toastError(titulo: string, text: string): void {
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: titulo,
      text,
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true
    });
}
}
