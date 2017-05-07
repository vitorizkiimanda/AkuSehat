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
  
  email:string;
  password:string;
  name:string;

  


  tanggal:string;
  durasiTidur:number;
  desekripsi:string;

  constructor(public navCtrl: NavController, public data: Data,public alertCtrl: AlertController , public http: Http) {

  }

  ionViewDidLoad() {

    

  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getNama().then((name) => {
      this.name = name;
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


  

}