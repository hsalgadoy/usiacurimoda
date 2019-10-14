import { Component, OnInit } from '@angular/core';
import { FirebaseStorageService } from '../firebase-storage.service';
import { AngularFireStorageReference } from '@angular/fire/storage';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor(private firebaseStorage: FirebaseStorageService) { }

  public referencia: AngularFireStorageReference;
  public URLMainMap: any;
  public URLMainMapHover: any;

  public color="red";
  ngOnInit(){
    console.log('ngOnit');
    this.referencia = this.firebaseStorage.referenciaCloudStorage('Ubicación-Usiacurí_Atlántico.png');
    this.referencia.getDownloadURL().subscribe((URL1) => {
      this.URLMainMap = URL1;
      console.log(this.URLMainMap);
    });
    this.referencia = this.firebaseStorage.referenciaCloudStorage('Diseño-atlantico-mapa-minimalista.png');
    this.referencia.getDownloadURL().subscribe((URL2) => {
      this.URLMainMapHover = URL2;
      console.log(this.URLMainMapHover);
    });
  }
  

}
