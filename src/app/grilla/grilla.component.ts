import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { Http , Headers } from '@angular/http';
import { MascotasService } from '../services/mascotas.service';
import { Mascota } from '../models/mascota.ts';


@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css'],
  providers: [DogService, MascotasService]
})
export class GrillaComponent implements OnInit {

  dogs : Mascotas[];
  pathAvatar: string = 'http://localhost/mascotas/Imagenes/';

  constructor(private dogService: DogService, private mascotasService: MascotasService) { }

  getDogs(): void {
   //this.dogs = this.dogService.getDogsList();
   //this.mascotasService.getAllMascotas("PERROS").then(data=> {
  //  console.log(data)
  //    });
  
    this.mascotasService.getMascotasNombre('perri').then(data => {
      this.dogs = data;
      console.log(this.dogs);
    });
  }

  ngOnInit() {
    this.getDogs();
  }

}
