import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfilPasien } from '../profil-pasien/profil-pasien';
import { Bayar } from '../bayar/bayar';
import { AlertController } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'beranda',
  templateUrl: 'beranda.html'
})
export class Beranda {
  

  daily: any;
  
  id_doctor:number;
  telephone:number;
  email:string;
  password:string;
  name:string;
  id_patient:number;
  address_patient:string;
  date_daily:string;
  


  constructor(public navCtrl: NavController, public data: Data,public alertCtrl: AlertController , public http: Http) {

  }

  ionViewDidLoad() {

    

  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.name = data.name_patient;
      // this.email = data.email_patient;
      this.id_patient = data.id_patient;
      this.address_patient = data.address_patient;
      //this.id_doctor = data.id_doct;
      this.getDataKesehatan();
    })

  }

  nextProfil(){
  	this.navCtrl.push(ProfilPasien);
  }


  nextBayar(){
  	this.navCtrl.push(Bayar);
  }


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ionViewWillEnter();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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


  getDataKesehatan(){
    this.http.get(this.data.BASE_URL+"/home_daily_health.php?patient="+this.id_patient).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.daily= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

  

}