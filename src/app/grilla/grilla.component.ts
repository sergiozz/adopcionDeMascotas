import { Component, OnInit } from '@angular/core';
import { DogService } from './dog.service';
import { Http , Headers } from '@angular/http';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css'],
  providers: [DogService, MascotasService]
})
export class GrillaComponent implements OnInit {

  dogs = [];

  constructor(private dogService: DogService, private mascotasService: MascotasService) { }

  getDogs(): void {
   this.dogs = this.dogService.getDogsList();
   //this.mascotasService.getAllMascotas("PERROS").then(data=> {
  //  console.log(data)
  //    });
  }

  ngOnInit() {
    this.getDogs();
  }

}
