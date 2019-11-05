import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Agrega estos módulos

import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { IntroduccionComponent } from './introduccion/introduccion.component';
import { CadenavalorComponent } from './cadenavalor/cadenavalor.component';
import { CaminomodaComponent } from './caminomoda/caminomoda.component';
import { BoomComponent } from './boom/boom.component';
import { LlegadacolorComponent } from './llegadacolor/llegadacolor.component';
import { CadenaComponent } from './cadena/cadena.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    IntroduccionComponent,
    CadenavalorComponent,
    CaminomodaComponent,
    BoomComponent,
    LlegadacolorComponent,
    CadenaComponent,
    TestimoniosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }