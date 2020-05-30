import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertsService, UsuariosService, ModalService } from 'src/app/core/services';
import { NgxSpinnerService } from 'ngx-spinner';
import * as fromStore from '../../store/perfil.reducers';
import * as fromAccions from '../../store/perfil.accions';

@Component({
  selector: 'app-info-personal',
  templateUrl: './info-personal.component.html',
  styleUrls: ['./info-personal.component.scss']
})
export class InfoPersonalComponent implements OnInit, OnDestroy  {

  private unsubscribe$ = new Subject<void>();
  public user: any = {};
  public forma: FormGroup;
  public marcadorSubmit: boolean = false;
  public spinnerModal: boolean = false;
  public formData = new FormData();
  public previewLogoUser: any = 'assets/images/camara.svg';

  constructor(
    private store: Store<{perfil: fromStore.State}>,
    private alertServices: AlertsService,
    private spinnerServices: NgxSpinnerService,
    private usuarioServices: UsuariosService,
    private modalServices: ModalService
  ) { }

  ngOnInit(): void {
    this.store.select('perfil')
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (perfil) => {
      this.user = perfil.user;
      this.iniciarForma();
    });
  }

  iniciarForma(): void {
    this.forma = new FormGroup({
      email_hidden: new FormControl( {value: this.user.email, disabled: true} ),
      documento: new FormControl(this.user.documento, [Validators.required]),
      nombre: new FormControl(this.user.nombre, [Validators.required] ),
      telefono: new FormControl( this.user.telefono ),
      genero: new FormControl( this.user.genero )
    });
  }

  actualizar(): void {
    this.marcadorSubmit = true;
    if ( this.forma.invalid ) {
      this.alertServices.toastInfo('', 'Debe completar los campos requeridos');
      return;
    }

    const payload = {
      documento: this.forma.value.documento,
      nombre: this.forma.value.nombre,
      telefono: this.forma.value.telefono,
      genero: this.forma.value.genero,
    };

    this.spinnerServices.show('spUpdate');
    this.usuarioServices.updatePerfil(payload)
    .pipe(takeUntil(this.unsubscribe$))
    .subscribe( (response) => {
      this.store.dispatch( fromAccions.reloadDatos() );
      this.spinnerServices.hide('spUpdate');
      this.alertServices.toastSuccess('', 'Datos actualizados correctamente');
      this.marcadorSubmit = false;
    }, (error) => {
      this.spinnerServices.hide('spUpdate');
      this.alertServices.toastError('', error.error.message);
    });
  }

  openModalImagen(): void {
    this.formData = new FormData();
    this.modalServices.open('modalImagen');
  }

  handleImagen(files: FileList) {
    this.formData.append('sampleFile', files[0], files[0].name);
    const reader = new FileReader();
    reader.onload = (e) => {
      this.previewLogoUser = e.target.result;
    };
    reader.readAsDataURL(files[0]);
  }

  cargarImagen(): void {
    this.spinnerModal = true;
    this.usuarioServices.uploadImg(this.formData)
    .subscribe( (response) => {
      this.spinnerModal = false;
      this.alertServices.toastSuccess('', response.message);
    }, (error) => {
      this.spinnerModal = false;
      console.log(error);
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
