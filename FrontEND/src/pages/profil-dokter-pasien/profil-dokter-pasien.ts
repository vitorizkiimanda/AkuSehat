import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';


@Component({
  selector: 'page-profil-dokter-pasien',
  templateUrl: 'profil-dokter-pasien.html',
})
export class ProfilDokterPasien {

  profilDokter: any;
  id_patient:number;

  constructor(public http: Http, public data: Data,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilDokterPasien');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.id_patient = data.id_patient;
      
      this.getProfilDokter();
    })

  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ionViewWillEnter();
    
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  getProfilDokter(){



    this.http.get(this.data.BASE_URL+"/profile_doctor_patient.php?patient="+this.id_patient).subscribe(data => { 
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.profilDokter= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }


  

}
