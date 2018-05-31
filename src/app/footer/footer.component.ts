import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  title: string = '❤ ¿Sabías que los dueños de perros son menos propensos a sufrir de depresión?';

  constructor() { }

  ngOnInit() {
  }

}
