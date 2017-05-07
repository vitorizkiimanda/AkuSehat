import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EditProfilPasien } from '../edit-profil-pasien/edit-profil-pasien';
import { AlertController } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanPasien } from '../pengaturan-pasien/pengaturan-pasien';
import { ProfilDokterPasien } from '../profil-dokter-pasien/profil-dokter-pasien';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-profil-pasien',
  templateUrl: 'profil-pasien.html',
})
export class ProfilPasien {

  history: any;
  
  id_doctor:number;
  email:string;
  password:string;
  name:string;
  id_patient:number;
  address_patient:string;

  no_tel_patient:number;
  name_doctor:string;

  constructor(public navCtrl: NavController, public http: Http, public data: Data, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilPasien');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.name = data.name_patient;
      this.email = data.email_patient;
      this.no_tel_patient = data.no_tel_patient;
      this.address_patient = data.address_patient;
      this.name_doctor = data.name_doctor;
      this.id_patient = data.id_patient;
      //this.id_doctor = data.id_doct;
      
      this.getRiwayatKesehatan();
    })

  }

  editProfil(){
  	this.navCtrl.push(EditProfilPasien);
  }

  editFoto(){
    let alert = this.alertCtrl.create({
      title: 'Belum bisa ubah foto profil.',
      buttons: ['OK']
    });
    alert.present();

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


  getRiwayatKesehatan(){
    this.http.get(this.data.BASE_URL+"/health_history.php?patient="+this.id_patient).subscribe(data => {
      let response = data;
      console.log(response);
      // if(response.status=="200"){
      //   this.history= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      // }
    });
  }


}
