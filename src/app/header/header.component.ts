import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = '¡Adoptá un perrito!';
  description: string = 'Aquí podrás encontrar algunos perritos esperando un hogar. No esperes más y conoce a tu próximo mejor amigo';

  constructor() { }

  ngOnInit() {
  }

}
