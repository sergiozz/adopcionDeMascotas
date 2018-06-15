import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../services/mascotas.service';
import { DogService } from '../grilla/dog.service';

import { Mascota} from '../models/mascota';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css'],
  providers: [DogService, MascotasService]
})
export class VisitaComponent implements OnInit {

  queryNameMascota: string;
  isEnabled: boolean;
  showSpinner: boolean = false;

  constructor(private mascotasService: MascotasService, private dogService: DogService) { }

  ngOnInit() {
    this.queryNameMascota = null;
    this.isEnabled = false;
  }

  queryForNameMascota() {
    console.log(this.queryNameMascota)
    this.showSpinner = true;
    this.mascotasService.getMascotasNombre(this.queryNameMascota).then(data => {
      let listadoMascotas = data;
      console.log(listadoMascotas);
      this.showSpinner = false;
    });
    

    this.isEnabled = true;
  }


}
