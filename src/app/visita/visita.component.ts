import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../services/mascotas.service';
import { Mascota } from '../models/mascota';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css'],
  providers: [ MascotasService ]
})
export class VisitaComponent implements OnInit {

  queryNameMascota: string;
  appRoute: ActivatedRoute;
  isEnabled: boolean;
  isVisita: boolean;
  showSpinner: boolean = false;
  listadoMascotas: Mascota[];

  constructor(private route: ActivatedRoute, private mascotasService: MascotasService) {
    this.appRoute = route;
  }

  ngOnInit() {
    this.listadoMascotas = new Array<Mascota>();
    this.queryNameMascota = null;
    this.isEnabled = false;
     this.isVisita = this.appRoute.snapshot.data['isVisita'];
  }

  queryForNameMascota() {
    this.showSpinner = true;
    this.mascotasService.getMascotasNombre(this.queryNameMascota).then(data => {
      this.listadoMascotas = data;
      console.log(this.listadoMascotas);
      this.isEnabled = true;
      this.showSpinner = false;
    });
  }

}
