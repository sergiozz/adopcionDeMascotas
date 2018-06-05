import { Component, OnInit } from '@angular/core';
import { MascotasService } from '../services/mascotas.service';
import { DogService } from '../grilla/dog.service';

@Component({
  selector: 'app-visita',
  templateUrl: './visita.component.html',
  styleUrls: ['./visita.component.css'],
  providers: [DogService, MascotasService]
})
export class VisitaComponent implements OnInit {

  queryNameMascota: string;
  isEnabled: boolean;

  constructor(private mascotasService: MascotasService, private dogService: DogService) { }

  ngOnInit() {
    this.queryNameMascota = null;
    this.isEnabled = false;
  }

  queryForNameMascota() {
    console.log(this.queryNameMascota)
    this.mascotasService.getMascotasNombre(this.queryNameMascota).then(data => {
        console.log(data)
    });

    this.isEnabled = true;
  }


}
