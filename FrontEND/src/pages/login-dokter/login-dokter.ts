import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BerandaDokter } from '../beranda-dokter/beranda-dokter';
import { TabsDokter } from '../tabs-dokter/tabs-dokter';
import { SignupDokter } from '../signup-dokter/signup-dokter';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';


@Component({
  selector: 'page-login-dokter',
  templateUrl: 'login-dokter.html',
})
export class LoginDokter {

  email:string;
  password:string;

  constructor(public navCtrl: NavController,
  public http: Http,public alertCtrl: AlertController , public navParams: NavParams, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginDokter');
  }

  gotoTab(){
    this.navCtrl.push(TabsDokter);
  }

  signUp(){
	 this.navCtrl.push(SignupDokter);
  }


  masuk(){

    let input = JSON.stringify({
        email: this.email, 
        password: this.password
        
      });
    console.log(input);
    this.http.post(this.data.BASE_URL+"/test/login_doctors.php", input).subscribe(data => {
           console.log(data);
           let response = data.json();
           
           if(response.status=="200"){
             //storage data local di ionicnya dari data base
             this.data.login(response.data);
             this.gotoTab();
           }
           else
           {
             let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah!',      
                buttons: ['OK']
              });
              alert.present();
           }
           console.log(response);
           
        }, err => { 
           
        });

  }
}
