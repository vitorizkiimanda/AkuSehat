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
import { PilihDokterLagiPage } from '../pilih-dokter-lagi/pilih-dokter-lagi';
import { KomentarPage } from '../komentar/komentar';


@Component({
  selector: 'beranda',
  templateUrl: 'beranda.html'
})
export class Beranda {
  
  items = [];

  daily: any;
  theme: string;
  
  id_doctor:number;
  telephone:number;
  email:string;
  password:string;
  name:string;
  id_patient:number;
  address_patient:string;
  date_daily:string;
  


  constructor(public navCtrl: NavController, public data: Data,public alertCtrl: AlertController , public http: Http) {

    for (let i = 0; i < 5; i++) {
      this.items.push( this.items.length );
    }

  }

  ionViewDidLoad() {

    

  }
 

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    
    this.data.getDataPasien().then((data) => {
      this.name = data.name_patient;
      // this.email = data.email_patient;
      this.id_patient = data.id_patient;
      this.theme= data.theme;
      this.address_patient = data.address_patient;
      //this.id_doctor = data.id_doct;

      //cek punya dokter atau nggak
      this.cekDokter();
      //
      this.getDataKesehatan();
      // this.tema();
    })

  }

  tema(){
    this.http.get(this.data.BASE_URL+"/theme_patient.php?patient="+this.id_patient).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.theme= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
      else
      {
        console.log("gagal");
      }
    });
  }

  nextProfil(){
  	this.navCtrl.push(ProfilPasien);
  }


  nextBayar(){
  	this.navCtrl.push(Bayar);
  }

  
  komentar(data){
     this.navCtrl.push(KomentarPage, data);
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
    this.http.get(this.data.BASE_URL+"/home_daily_health_patient.php?patient="+this.id_patient).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.daily= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }


  cekDokter(){
    this.http.get(this.data.BASE_URL+"/check_doctor.php?patient="+this.id_patient).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="503"){
        this.navCtrl.setRoot(PilihDokterLagiPage);
      }
    });
  }
  

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


  

}