import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController } from 'ionic-angular';
import { ProfilPasien } from '../profil-pasien/profil-pasien';
import { AlertController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';

import { Vibration } from '@ionic-native/vibration';



@Component({
  selector: 'page-edit-profil-pasien',
  templateUrl: 'edit-profil-pasien.html',
})
export class EditProfilPasien {

  history: any;
  history2: any;

  theme: string;
  
  name:string;
  id_patient:number;
  address_patient:string;
  age:number;
  weight:number;
  height:number;
  allergy:string;
  disability:string;
  operation:string;
  description:string;
  no_tel_patient:string;

  address:string;

  constructor(private vibration: Vibration,public navCtrl: NavController,public http: Http, public data: Data, public alertCtrl: AlertController, public navParams: NavParams,public loadCtrl: LoadingController) {
  }

   
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilPasien');
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.name = data.name_patient;
      // this.email = data.email_patient;
      this.no_tel_patient = data.no_tel_patient;
      this.address_patient = data.address_patient;
      // this.name_doctor = data.name_doctor;
      this.id_patient = data.id_patient;
      //this.id_doctor = data.id_doct;
       this.theme= data.theme;
      
      this.getRiwayatKesehatan();
      this.getDataHistory();
    })

  }

  simpanProfil(){

  // let alert = this.alertCtrl.create({
  //     title: 'Data Tersimpan!',
  //     buttons: ['OK']
  //   });
  //   alert.present();

    this.editProfil();
  	this.navCtrl.push(ProfilPasien);
    this.ionViewWillEnter();
  }


  getRiwayatKesehatan(){


    // nah ini nnti dipisah aja jadi 2 ,, eheheheh 


    this.http.get(this.data.BASE_URL+"/health_history.php?patient="+this.id_patient).subscribe(data => { 
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.history= response.data;
        this.age=response.data[0].age;
        this.weight=response.data[0].weight;
        this.height=response.data[0].height;
        this.allergy=response.data[0].allergy;
        this.disability=response.data[0].disability;
        this.operation=response.data[0].operation;
        this.description=response.data[0].description;
           //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }

  editProfil()
  {
      let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
    loading.present();
      let input = JSON.stringify({
        name:this.name,
        no_tel_patient:this.no_tel_patient,
        address_patient:this.address_patient,
        age:this.age,
        weight:this.weight,
        height:this.height,
        allergy:this.allergy,
        disability:this.disability,
        operation:this.operation,
        description:this.description,
        // address:this.address
      });
        this.http.post(this.data.BASE_URL+"/edit_profile_patient.php?patient="+this.id_patient,input).subscribe(data => {
        let response = data.json();
	  if(response.status=="200"){

       
       // this.data.login(response.data);
          loading.dismiss();
          this.data.login(response.data,"pasien"); //ini buat nyimpen data baru ke providers lagi ,, jadi overwrite gitu
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
              this.vibration.vibrate(1000);
           }

      });
    
  }
  

  getDataHistory(){
    this.http.get(this.data.BASE_URL+"/patient_disease.php?patient="+this.id_patient).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.history2 = response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
  }



 






}
