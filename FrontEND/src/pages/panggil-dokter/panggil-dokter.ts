import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-panggil-dokter',
  templateUrl: 'panggil-dokter.html',
})
export class PanggilDokter {

  dokter:any;

  telephone:number;

  theme: string;

  photo:string;
  profile_pict_doct:string;
  id_doctor:number;
  

  constructor(public navCtrl: NavController, private callNumber: CallNumber,public data: Data,public alertCtrl: AlertController , public http: Http , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PanggilDokter');
  }



  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.telephone = data.no_tel_doctor;
      this.theme= data.theme;
      this.id_doctor= data.id_doctor;
      this.profile_pict_doct = data.profile_pict_doct;
      this.photo = this.data.BASE_URL+data.profile_pict_doct;
      // this.getFotoDokter();
      
    })

  }


  getFotoDokter(){
   
      this.http.get(this.data.BASE_URL+"/images_doctors.php?doctor="+this.id_doctor).subscribe(data => {
      let response = data.json();
      
      if(response.status=="200"){
        console.log(response);
        this.dokter= response.data;  
        this.profile_pict_doct=response.data[0].profile_pict_doct;
        this.photo = this.data.BASE_URL+this.profile_pict_doct;    

        // console.log(response.data.profile_pict_doct);   
        console.log(this.photo);
      }
    });
    
  }


teleponDokter(){
	this.callNumber.callNumber(String(this.telephone) , true)
  .then(() => console.log('Launched dialer!'))
  .catch(() => console.log('Error launching dialer'));
}

  gotoSettings(){
    this.navCtrl.push(PengaturanPasien);
  }

  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }
  profildokter(){
    this.navCtrl.push(ProfilDokterPasien);
  }

}
