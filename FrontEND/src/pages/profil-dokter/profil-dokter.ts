import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EditProfilDokter } from '../edit-profil-dokter/edit-profil-dokter';
import { AlertController } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-profil-dokter',
  templateUrl: 'profil-dokter.html',
})
export class ProfilDokter {

  profilDokter: any;
  profilDokterSum : any;
    name :string;
    email :string;
    no_tel_doctor :number;
    id_doctor:number;
    bank_doctor:string;
    no_account_doctor :number;
    specialization :string;
    sum_patient:string;

    theme:string;

  constructor(public http: Http, public data: Data,public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilDokter');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataDokter().then((data) => {
      this.name = data.name_doctor;
      this.email = data.email_doctor;
      this.no_tel_doctor = data.no_tel_doctor;
      this.id_doctor = data.id_doctor;
      this.bank_doctor = data.bank_doctor;
      this.no_account_doctor = data.no_account_doctor;
      this.specialization = data.specialization;
      this.sum_patient = data.sum_patient;
      this.theme= data.theme;

      this.getProfilDokter();
      this.getProfilDokterSum();
    })

    

  }


   getProfilDokter(){
    this.http.get(this.data.BASE_URL+"/profile_doctor.php?doctor="+this.id_doctor).subscribe(data => { 
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.profilDokter= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

  getProfilDokterSum(){
    this.http.get(this.data.BASE_URL+"/profile_doctor_sum.php?doctor="+this.id_doctor).subscribe(data => { 
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.profilDokterSum= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

  editProfil(){
  	this.navCtrl.push(EditProfilDokter);
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

  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }

  gotoSettings(){
    this.navCtrl.push(PengaturanDokter);
  }

}
