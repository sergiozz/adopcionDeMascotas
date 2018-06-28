import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../models/mascota';
import { MascotasService } from '../services/mascotas.service';

@Component({
  selector: 'app-carga-de-visita',
  templateUrl: './carga-de-visita.component.html',
  styleUrls: ['./carga-de-visita.component.css'],
  providers: [ MascotasService ]
})
export class CargaDeVisitaComponent implements OnInit {

  id : string;
  dateValue : string;
  moneyValue : number;
  mascota : Mascota;
  pathAvatar: string = 'http://localhost/mascotas/Imagenes/';

  constructor(private route: ActivatedRoute, private mascotasService: MascotasService) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
     this.id = params['id'];
     this.cargaDeDatosIniciales();
   });
  }

 cargaDeDatosIniciales(){
   this.mascotasService.getMascota(this.id).then(data => {
     this.mascota = data;
     console.log(this.mascota);
     // this.isEnabled = true;
     // this.showSpinner = false;
   });
  }

}
