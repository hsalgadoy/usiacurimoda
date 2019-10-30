import { Component, OnInit } from '@angular/core';
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
  
/**

  //Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo preparado: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name)
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }

  //Sube el archivo a Cloud Storage
  public subirArchivo() {
    let archivo = this.datosFormulario.get('archivo');
    let referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    let tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    //Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje == 100) {
        this.finalizado = true;
      }
    });

    referencia.getDownloadURL().subscribe((URL) => {
      this.URLPublica = URL;
    });
  }
   
 */
}