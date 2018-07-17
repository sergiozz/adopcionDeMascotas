import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { MascotasService } from '../services/mascotas.service';
import { Mascota } from '../models/mascota';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css'],
  providers: [ MascotasService]
})
export class GrillaComponent implements OnInit {

  @Input() listadoMascotas: Mascota[];
  @Input() actionVisita: boolean;;
  pathAvatar: string = 'http://localhost/mascotas/Imagenes/';

  constructor(private mascotasService: MascotasService) { }

  ngOnInit() {
    if (!this.listadoMascotas) {
      this.mascotasService.mascotas(null).then(data => {
        this.listadoMascotas = data;
      });
    }
  }

}
