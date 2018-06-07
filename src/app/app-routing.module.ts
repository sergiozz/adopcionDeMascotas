import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VisitaComponent } from './visita/visita.component';
import { GrillaComponent } from './grilla/grilla.component';
import { CargaDeVisitaComponent } from './carga-de-visita/carga-de-visita.component';

export const appRoutes: Routes = [
  { path: 'visita',
    component: VisitaComponent },
  { path: 'visita/:id',
    component: CargaDeVisitaComponent },

  { path: '**', component: GrillaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
