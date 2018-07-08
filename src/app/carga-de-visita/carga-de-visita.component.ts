import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mascota } from '../models/mascota';
import { MascotasService } from '../services/mascotas.service';
import { Estudio } from '../models/estudio';
import { TipoEstudio } from '../models/tipoEstudio';
import { EstudioAgregado } from '../models/estudioAgregado';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';


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
  todosLosEstudios: TipoEstudio[];

  estudiosAgregados: EstudioAgregado[];
  tipoEstudioValue: TipoEstudio;
  obsValue: string;


  estudioFormInput:FormGroup;

  constructor(private route: ActivatedRoute, private mascotasService: MascotasService, private fb: FormBuilder) {
    this.estudioFormInput = this.fb.group({
    'Estudios' : ['', Validators.required]
    });
  }

  ngOnInit() {
  this.estudiosHistorico = new Array<Estudio>();
  this.estudiosAgregados = new Array<EstudioAgregado>();
  this.obsValue = null;
  this.showSpinnerPerfil = true;
  this.showSpinnerHistorico = true;
  this.dateValue = null;

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
    this.mascotasService.getAllEstudios().then(data => {
      this.todosLosEstudios = data;
      console.log(data);
     });
  }

  saveUnEstudio(){
    let aux = new EstudioAgregado();
    aux.tipoEstudioId = this.tipoEstudioValue.Id;
    aux.descripcion = this.tipoEstudioValue.descripcion;
    aux.observaciones = this.obsValue;

    console.log(aux)
    this.estudiosAgregados.push(aux);
    this.tipoEstudioValue = null;
  }

  deleteEstudio(indice : number){
    this.estudiosAgregados.splice(indice,1);
  }

  saveEstudiosMascota(){
    console.log(this.estudiosAgregados)
    console.log(this.dateValue)
    console.log(this.moneyValue)
  }

}
