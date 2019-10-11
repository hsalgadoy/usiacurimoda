import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Agrega estos módulos
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }