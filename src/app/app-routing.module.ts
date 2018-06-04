import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VisitaComponent } from './visita/visita.component';
import { GrillaComponent } from './grilla/grilla.component';

export const appRoutes: Routes = [
  { path: 'visita',
    component: VisitaComponent },

  { path: '**', component: GrillaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
