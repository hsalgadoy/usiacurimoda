import { Component, OnInit } from '@angular/core';
import { FirebaseStorageService } from '../firebase-storage.service';


@Component({
  selector: 'app-cadenavalor',
  templateUrl: './cadenavalor.component.html',
  styleUrls: ['./cadenavalor.component.css']
})
export class CadenavalorComponent implements OnInit {
  public cadena;
  public eslavones = [];
  public newarr = [];
  public  bleep = new Audio();
            
  constructor(private firebaseStorage: FirebaseStorageService) {
    this.bleep.src = 'https://audio-ssl.itunes.apple.com/apple-assets-us-std-000001/Music4/v4/f0/b8/fa/f0b8fa78-b63b-34df-c4f2-4156a3a83b38/mzaf_6470951130098414732.plus.aac.ep.m4a';
   }

  ngOnInit() {
    this.firebaseStorage.getText("cadenavalor").subscribe((eslavonSnapshot) => {
      this.eslavones = [];
      eslavonSnapshot.forEach((eslavonData: any) => {
        this.eslavones.push({
          id: eslavonData.payload.doc.id,
          data: eslavonData.payload.doc.data()
        });
      })
    });
    this.newarr = this.eslavones.sort((a, b) => a.data.orden - b.data.orden);
    console.log(this.newarr);
  }
 
  play(){
    this.bleep.play();
  }
  



}
