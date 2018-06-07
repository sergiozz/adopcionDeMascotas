import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carga-de-visita',
  templateUrl: './carga-de-visita.component.html',
  styleUrls: ['./carga-de-visita.component.css']
})
export class CargaDeVisitaComponent implements OnInit {

  id : string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  this.route.params.subscribe(params => {
     this.id = params['id'];
   });

  }

}
