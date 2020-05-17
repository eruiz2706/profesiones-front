import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-state-img',
  templateUrl: './content-state-img.component.html',
  styleUrls: ['./content-state-img.component.scss']
})
export class ContentStateImgComponent implements OnInit {
 
  @Input() titulo: string;
  @Input() subtitulo: string;
  @Input() imagen: string;

  constructor() { }

  ngOnInit(): void {
  }

}
