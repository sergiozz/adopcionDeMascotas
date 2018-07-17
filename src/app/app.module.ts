//IMPORTS MODULE
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//IMPORT SERVICES
import { MascotasService } from './services/mascotas.service';

//IMPORTS COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { GrillaComponent } from './grilla/grilla.component';
import { VisitaComponent } from './visita/visita.component';
import { CargaDeVisitaComponent } from './carga-de-visita/carga-de-visita.component';
import { AdopcionComponent } from './adopcion/adopcion.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationBarComponent,
    GrillaComponent,
    VisitaComponent,
    CargaDeVisitaComponent,
    SpinnerComponent,
    AdopcionComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MascotasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
