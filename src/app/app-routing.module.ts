import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VisitaComponent } from './visita/visita.component';
import { GrillaComponent } from './grilla/grilla.component';
import { CargaDeVisitaComponent } from './carga-de-visita/carga-de-visita.component';
import { AdopcionComponent } from './adopcion/adopcion.component';

export const appRoutes: Routes = [
  { path: 'visita',
    component: VisitaComponent,
    data : { isVisita : true } },
  { path: 'busqueda',
    component: VisitaComponent,
    data : { isVisita : false } },
  { path: 'visita/:id',
    component: CargaDeVisitaComponent },
  { path: 'adopcion/:id',
    component: AdopcionComponent },

  { path: '**', component: GrillaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
