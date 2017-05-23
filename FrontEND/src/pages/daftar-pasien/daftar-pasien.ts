import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AkuSehat } from '../aku-sehat/aku-sehat';
import { PengaturanDokter } from '../pengaturan-dokter/pengaturan-dokter';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { ProfilPasienDokter } from '../profil-pasien-dokter/profil-pasien-dokter';
import { HarianPasienPage } from '../harian-pasien/harian-pasien';

@Component({
  selector: 'page-daftar-pasien',
  templateUrl: 'daftar-pasien.html',
})
export class DaftarPasien {



  pasien: any;
  name:string;
  specialization:string;
  email:string;
  id_doctor:number;
  bank_number:number;
  bank:string;
  telephone:number;
  sum:number;
  no_tel_patient:number;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public navParams: NavParams, public http: Http, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarPasien');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataDokter().then((data) => {
      this.name = data.name_doctor;
      this.specialization = data.specialization;
      // this.email = data.email_doctor;
      this.id_doctor = data.id_doctor;
      // this.bank_number = data.no_account_doctor;
      // this.telephone = data.no_tel_doctor;
      // this.bank = data.bank_doctor;
      // this.sum = data.sum_patient;
      this.getDataPasien();

    });
    
    
    
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.ionViewWillEnter();

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }


  profilPasien(data){
     this.navCtrl.push(ProfilPasienDokter, data);
  }
  harianPasien(data){
     this.navCtrl.push(HarianPasienPage, data);
  }



  gotoAbout(){
    this.navCtrl.push(AkuSehat);
  }

  gotoSettings(){
    this.navCtrl.push(PengaturanDokter);
  }



  getDataPasien(){
    this.http.get(this.data.BASE_URL+"/user.php?doctor="+this.id_doctor).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.pasien= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }
  
}
