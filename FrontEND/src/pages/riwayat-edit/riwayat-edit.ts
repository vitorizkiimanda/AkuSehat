import { Component } from '@angular/core';
import {  NavController, NavParams,LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ProfilPasien } from '../profil-pasien/profil-pasien';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import {LocalNotifications} from 'ionic-native';

@Component({
  selector: 'page-riwayat-edit',
  templateUrl: 'riwayat-edit.html'
})
export class RiwayatEditPage {

  submitted = false;
  submitted1= false;
  submitted2= false;

  hospitalized_date:string;
  hospitalized_long:number;
  disease_type:string;

  id_patient:number;
  id_history:number;
  id_patient_disease:number;

  isValidFormLama= true;
  isValidFormDate= false;

  theme: string;


  constructor(public navCtrl: NavController,
  public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data,public loadCtrl: LoadingController) {

    let penyakit = this.navParams.data; //ngambil data yang dikirim

    this.disease_type = penyakit.disease_type;
    this.hospitalized_date = penyakit.hospitalized_date;
    this.hospitalized_long = penyakit.hospitalized_long;
    this.id_history = penyakit.id_history;
    this.id_patient_disease = penyakit.id_patient_disease;


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RiwayatEditPage');
  }

   ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
       this.theme= data.theme;
    })

  }

  checkLama(){
    console.log(this.hospitalized_long);
    if(this.hospitalized_long<0){
      this.isValidFormLama=false;
      // this.telephoneMessage = "Jangan minus coy";
    } else {
      // this.telephoneMessage=null;
      this.isValidFormLama=true;
    }

  }

  checkDate(){
    console.log(this.hospitalized_long);
    this.isValidFormLama=true;

  }


  simpanData(form: NgForm){

    let loading = this.loadCtrl.create({
        content: 'menambahkan..'
    });

    this.submitted = true;
    this.submitted1 = true;
    this.submitted2 = true;
    this.checkLama();
    
    if(form.valid && this.isValidFormLama && this.isValidFormLama){
      loading.present();
      let input = JSON.stringify({
   
        // date_daily:this.date_daily,
        hospitalized_date:this.hospitalized_date,
        hospitalized_long:this.hospitalized_long,
        disease_type:this.disease_type
      });
      console.log(input);
        this.http.post(this.data.BASE_URL+"/edit_patient_disease.php?id="+this.id_patient_disease,input).subscribe(data => {
        let response = data.json();
  	if(response.status=="200"){
        console.log(response);
        //this.data.login(response.data);

        let alert = this.alertCtrl.create({
          title: 'Data Tersimpan!',
          buttons: ['OK']
        });
        alert.present();
        loading.dismiss();
        this.navCtrl.push(ProfilPasien);
        
      }
      else
           {
             loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Gagal',
                subTitle: 'silahkan coba lagi',      
                buttons: ['OK']
              });
              alert.present();
           }

      });
    }
    else
    {
            loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Gagal',
                subTitle: 'silahkan coba lagi',      
                buttons: ['OK']
              });
              alert.present();
           }

  }

  




}
