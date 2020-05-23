import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss']
})
export class ContentWrapperComponent implements OnInit {

  loading: boolean = false;
  contentImgData: any[];
  contentImgVisible: boolean = false;
  contentStateTitulo: string = '';
  contentStateSubtitulo: string = '';
  contentStateImagen: string = '';
  contentStateButton: string = '';
  contentStateRedirect: string = '';

  @Output() buttonClickEmpty = new EventEmitter<string>();
  @Input() titulo: string = '';
  @Input()
  set loader(value: boolean) {
    this.loading = value;
    if (this.loading) {
      this.spinnerService.show();
    } else {
      this.spinnerService.hide();
    }
  }
  @Input()
  set contentImg(value: string) {

    this.contentImgVisible = false;
    this.contentStateTitulo = '';
    this.contentStateSubtitulo = '';
    this.contentStateImagen = '';
    this.contentStateButton = '';
    this.contentStateRedirect = '';

    this.contentImgData.forEach(element => {
      if (element.tipo === value) {
        this.contentImgVisible = true;
        this.contentStateTitulo = element.titulo;
        this.contentStateSubtitulo = element.subtitulo;
        this.contentStateImagen = element.imagen;
        this.contentStateButton = element.buttonText;
        this.contentStateRedirect = element.redirect;
      }
    });
  }

  constructor(
    private spinnerService: NgxSpinnerService
  ) {

    this.contentImgData = [
      {
        tipo: 'error',
        titulo: 'Lo Sentimos no fue posible traer resultados para la accion solicitada.',
        subtitulo: 'Si persiste el problema, puedes reportar el error.',
        imagen: 'assets/images/cancel.svg',
        redirect: '/novedades',
        buttonText: 'Reportar Error'
      },
      {
        tipo: 'empty',
        titulo: 'Parece que no tienes ninguna item creado',
        subtitulo: 'Afortunadamente, es muy facil crear uno.',
        imagen: 'assets/images/lista_vacia.svg',
        redirect: '',
        buttonText: 'Nuevo registro'
      },
      {
        tipo: 'noauth',
        titulo: '¡Uy! ¡No fue posible mostrar el contenido!',
        subtitulo: 'Lo sentimos, no tines los permisos sufientes para ver el contenido.',
        imagen: 'assets/images/noauth.svg',
        redirect: '/',
        buttonText: 'Ir a la pagina principal'
      }
    ];
  }


  onClickButtonEmpty(): void {
    this.buttonClickEmpty.emit('');
  }

  ngOnInit(): void {
  }

}
