import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../models/mascota';
import { MascotasService } from '../services/mascotas.service';
import { Estudio } from '../models/estudio';
import { TipoEstudio } from '../models/tipoEstudio';

@Component({
  selector: 'app-adopcion',
  templateUrl: './adopcion.component.html',
  styleUrls: ['./adopcion.component.css'],
  providers: [ MascotasService ]
})
export class AdopcionComponent implements OnInit {

  id : string;
  dateValue : string;
  moneyValue : number;
  mascota : Mascota;
  pathAvatar: string = 'http://localhost/mascotas/Imagenes/';
  estudiosHistorico: Estudio[];
  showSpinnerPerfil: boolean;
  showSpinnerHistorico: boolean;
  todosLosEstudios: TipoEstudio[];
  obsValue: string;

  constructor(private route: ActivatedRoute, private mascotasService: MascotasService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.id = params['id'];
       this.cargaDeDatosIniciales();
     });
  }

 cargaDeDatosIniciales(){
   this.estudiosHistorico = new Array<Estudio>();
   this.obsValue = null;
   this.showSpinnerPerfil = true;
   this.showSpinnerHistorico = true;

   this.mascotasService.getMascota(this.id).then(data => {
     this.mascota = data;
     this.showSpinnerPerfil = false;
   });

   this.mascotasService.getEstudios(this.id).then(data => {
     this.estudiosHistorico = data;
     this.showSpinnerHistorico = false;
    });
  }

  pedirAdopcion() {
  }
}
