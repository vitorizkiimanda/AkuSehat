import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController } from 'ionic-angular';
import { ProfilDokter } from '../profil-dokter/profil-dokter';
import { AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

@Component({
  selector: 'page-edit-profil-dokter',
  templateUrl: 'edit-profil-dokter.html',
})
export class EditProfilDokter {

  theme: string;

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
    experience:string;
    hospital:string;
    educational_background:string;

  constructor(public loadCtrl: LoadingController,public navCtrl: NavController,public http: Http, public data: Data, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilPasien');
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
    })

  }


   getProfilDokter(){
    this.http.get(this.data.BASE_URL+"/profile_doctor.php?doctor="+this.id_doctor).subscribe(data => { 
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
       this.profilDokter= response.data;
        this.experience=response.data[0].experience;
        this.educational_background=response.data[0].educational_background;
        this.hospital=response.data[0].hospital;
        
           //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }


  editProfil()
  {
    let loading = this.loadCtrl.create({
        content: 'menyimpan..'
    });
    loading.present();
      let input = JSON.stringify({
        name:this.name,
        no_tel_doctor:this.no_tel_doctor,
        bank_doctor:this.bank_doctor,
        no_account_doctor:this.no_account_doctor,
        specialization:this.specialization,
        hospital:this.hospital,
        sum_patient:this.sum_patient,
        educational_background:this.educational_background,
        experience:this.experience

      });
        this.http.post(this.data.BASE_URL+"/edit_profile_doctor.php?doctor="+this.id_doctor,input).subscribe(data => {
        let response = data.json();
        // console.log(response);
        
	  if(response.status=="200"){

       
       // this.data.login(response.data);
          loading.dismiss();
          this.data.login(response.data,"dokter");
          // this.navCtrl.push(ProfilPasien);
          let alert = this.alertCtrl.create({
          title: 'Data Tersimpan!',
          subTitle: 'Lakukan refresh dengan cara menarik halaman kebawah',
          buttons: ['OK']
          });
          alert.present();
      }
      else
           {
             loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Gagal Mengubah Profil',
                subTitle: '',      
                buttons: ['OK']
              });
              alert.present();
           }

      });
    
  }



  simpanProfil(){

  // let alert = this.alertCtrl.create({
  //     title: 'Data Tersimpan!',
  //     buttons: ['OK']
  //   });
  //   alert.present();


    this.editProfil();
  	this.navCtrl.push(ProfilDokter);
  }

}
