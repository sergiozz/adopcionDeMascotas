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
    this.route.params.subscribe(params => {
       this.id = params['id'];
       this.cargaDeDatosIniciales();
     });
  }

 cargaDeDatosIniciales(){
   this.estudiosHistorico = new Array<Estudio>();
   this.estudiosAgregados = new Array<EstudioAgregado>();
   this.obsValue = null;
   this.moneyValue = 0;
   this.showSpinnerPerfil = true;
   this.showSpinnerHistorico = true;
   this.dateValue = null;

   this.mascotasService.getMascota(this.id).then(data => {
     this.mascota = data;
     this.showSpinnerPerfil = false;
   });

   this.mascotasService.getEstudios(this.id).then(data => {
     this.estudiosHistorico = data;
     this.showSpinnerHistorico = false;
    });
    this.mascotasService.getAllEstudios().then(data => {
      this.todosLosEstudios = data;
     });
  }

  saveUnEstudio(){
    let aux = new EstudioAgregado();
    aux.tipoEstudioId = this.tipoEstudioValue.Id;
    aux.descripcion = this.tipoEstudioValue.descripcion;
    aux.observaciones = this.obsValue;
    this.estudiosAgregados.push(aux);
    this.tipoEstudioValue = null;
  }

  deleteEstudio(indice : number){
    this.estudiosAgregados.splice(indice,1);
  }

  saveEstudiosMascota() {
    let aux = {
      "veterinarioId": 4,
      "mascotaId": this.id,
      "fecha": this.dateValue,
      "monto": this.moneyValue,
      "estudio": this.estudiosAgregados
    };

    this.mascotasService.saveVisita(aux).then(data => {
      this.cargaDeDatosIniciales();
    });
  }
}
