import { Component, OnInit, Input } from '@angular/core';
import { FirebaseStorageService } from './firebase-storage.service';
import { AngularFireStorageReference } from '@angular/fire/storage';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (
    private firebaseStorage: FirebaseStorageService
    
  ) {}
  
  public mensajeArchivo = 'No hay un archivo seleccionado';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica: any;
  public porcentaje = 0;
  public finalizado = false;
  public referencia: AngularFireStorageReference;

  ngOnInit(){
  
    console.log('ngOnit');
    this.referencia = this.firebaseStorage.referenciaCloudStorage('foto-portada.JPG');
    this.referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
    });
    console.log(this.URLPublica);
  }
}