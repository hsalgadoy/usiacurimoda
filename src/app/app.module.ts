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

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    IntroduccionComponent,
    CadenavalorComponent
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