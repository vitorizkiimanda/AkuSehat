import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration';
import { AlertController } from 'ionic-angular';

var dateNow = new Date();

@Component({
  selector: 'page-komentar',
  templateUrl: 'komentar.html'
})
export class KomentarPage {

  theme:string;

  daily:any;

  id_daily_h:number;
  id_patient:number;
  comment_patient:string;

  submitted = false;

  date:string;

  constructor(public alertCtrl: AlertController ,private vibration: Vibration,public navCtrl: NavController, public navParams: NavParams,public data: Data, public http: Http,public loadCtrl: LoadingController) {

    let dataKesehatan = this.navParams.data; //ngambil data yang dikirim

    this.id_daily_h = dataKesehatan.id_daily_h;
    this.id_patient = dataKesehatan.id_patient;
    
    console.log(dataKesehatan);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KomentarPage');
    
  }

  ionViewWillEnter() {
    //ini ni ngambil value yang di return dari data.ts
    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
    loading.present();
    this.data.getDataPasien().then((data) => {
      this.theme= data.theme;

      this.getDataKesehatan();
      

    })
    loading.dismiss();

  }

  getDataKesehatan(){
    this.http.get(this.data.BASE_URL+"/comment_daily.php?id_daily_h="+this.id_daily_h).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status=="200"){
        this.daily= response.data;   //ini disimpen ke variabel pasien diatas itu ,, yang udah di delacre
        
        
      }
    });
  }


  komentar(form: NgForm){
    
    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });
    if(form.valid){
      this.submitted = true;
      loading.present();
      let input = JSON.stringify({
        comment_patient:this.comment_patient,
        date: dateNow
      });
        this.http.post(this.data.BASE_URL+"/comments_patient.php?patient="+this.id_patient+ "&id_daily_h="+this.id_daily_h,input).subscribe(data => {
        let response = data.json();
        
	if(response.status=="200"){
        console.log(response);
        this.data.login(response.data,"pasien");
        
        loading.dismiss();
        
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
