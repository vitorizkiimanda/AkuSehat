import { Component } from '@angular/core';
import {  NavController, NavParams,App,LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { SignupPasien } from '../signup-pasien/signup-pasien';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration';
import { MyApp } from '../../app/app.component.ts';

@Component({
  selector: 'page-pilih-dokter-lagi',
  templateUrl: 'pilih-dokter-lagi.html'
})
export class PilihDokterLagiPage {

  dokter:any;
  id_patient:number;
  theme:string;

  testRadioOpen: boolean;
  testRadioResult;

  choose_doctor:string;

  submitted = false;
  isValidFormChoose = false;

  constructor(private vibration: Vibration,public app: App,public navCtrl: NavController, public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data,public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PilihDokterLagiPage');
  }

  
  gotoTab(){
  	this.navCtrl.setRoot(TabsPage);
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    this.data.getDataPasien().then((data) => {
      this.id_patient = data.id_patient;
      this.theme= data.theme;
      
      this.http.get(this.data.BASE_URL+"/choose_doctor.php").subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.dokter= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
      }
    });
    })

  }
  checkDokter(){
    this.isValidFormChoose=true;
    
  }

  
  

  doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Spesialisasi Dokter');

for(let data of this.dokter){
    alert.addInput({
      type: 'radio',
      label: data.specialization,
      value: data.specialization
    });
    }

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.choose_doctor=data;
        this.checkDokter();
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }


  signup(form: NgForm){
    
    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
    if(form.valid){
      this.submitted = true;
      loading.present();
      let input = JSON.stringify({
        choose_doctor:this.choose_doctor
      });
        this.http.post(this.data.BASE_URL+"/choosing_doctor.php?patient="+this.id_patient,input).subscribe(data => {
        let response = data.json();
        
	if(response.status=="200"  && this.isValidFormChoose){
        //console.log(response);
        this.data.logout();
        this.app.getRootNav().setRoot(MyApp);
        loading.dismiss();
        let alert = this.alertCtrl.create({
                title: 'Anda mendapatkan dokter baru',
                subTitle: 'silahkan masuk',      
                buttons: ['OK']
              });
            alert.present();
      }
      else if(!this.isValidFormChoose)
           {
             loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Pilih Dokter',
                subTitle: '',      
                buttons: ['OK']
              });
              this.vibration.vibrate(1000);
              alert.present();
              
           }
      else
           {
             loading.dismiss();
             let alert = this.alertCtrl.create({
                title: 'Proses Gagal',
                subTitle: 'silahkan coba lagi',      
                buttons: ['OK']
              });
              this.vibration.vibrate(1000);
              alert.present();
              
           }

      });
    }
    
  }




}
