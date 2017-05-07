import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BerandaDokter } from '../beranda-dokter/beranda-dokter';
import { TabsDokter } from '../tabs-dokter/tabs-dokter';
import { SignupDokter } from '../signup-dokter/signup-dokter';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-login-dokter',
  templateUrl: 'login-dokter.html',
})
export class LoginDokter {

  email:string;
  password:string;
  submitted = false;  //ini di declare awalnya false dlu

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


  login(form: NgForm){
    this.submitted = true;
    if(form.valid){
      let input = JSON.stringify({
        email: this.email, 
        password: this.password
      });
        this.http.post(this.data.BASE_URL+"/login_doctors.php",input).subscribe(data => {
        let response = data.json();
	if(response.status=="200"){
        //console.log(response);
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

      });
    }
  }




  lupaPassword(){
             let alert = this.alertCtrl.create({
                title: 'Hubungi Admin',
                subTitle: 'Nuh  : @nuhsat <br> Fatim  : @haefa',      
                buttons: ['OK']
              });
              alert.present();
           }


}
