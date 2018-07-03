import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../models/mascota';
import { MascotasService } from '../services/mascotas.service';
import { Estudio } from '../models/estudio';

@Component({
  selector: 'app-carga-de-visita',
  templateUrl: './carga-de-visita.component.html',
  styleUrls: ['./carga-de-visita.component.css'],
  providers: [ MascotasService ]
})
export class CargaDeVisitaComponent implements OnInit {

  id : string;
  dateValue : string;
  razaMascota : String;
  moneyValue : number;
  mascota : Mascota;
  pathAvatar: string = 'http://localhost/mascotas/Imagenes/';
  estudiosHistorico: Estudio[];
  showSpinnerPerfil: boolean;
  showSpinnerHistorico: boolean;

  constructor(private route: ActivatedRoute, private mascotasService: MascotasService) { }

  ngOnInit() {
  this.estudiosHistorico = new Array<Estudio>();
  this.showSpinnerPerfil = true;
  this.showSpinnerHistorico = true;
  this.route.params.subscribe(params => {
     this.id = params['id'];
     this.cargaDeDatosIniciales();
   });
  }

 cargaDeDatosIniciales(){
   this.mascotasService.getMascota(this.id).then(data => {
     this.mascota = data;
     this.mascotasService.getRaza(this.mascota.razaId).then(data2 => {
       console.log(data2.descripcion)
        this.razaMascota = data2.descripcion;
        this.showSpinnerPerfil = false;
     });
     console.log(this.mascota);
     // this.isEnabled = true;
     // this.showSpinner = false;
   });

   this.mascotasService.getEstudios(this.id).then(data => {
     console.log(data);
     this.estudiosHistorico = data;
     this.showSpinnerHistorico = false;
    });
  }

}
