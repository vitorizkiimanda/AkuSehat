import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { TabsDokter } from '../pages/tabs-dokter/tabs-dokter';
import { Login } from '../pages/login/login';
import { Data } from "../providers/data";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public data: Data) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.data.isLogin().then((value)=>{
      if(value){
        this.data.getRole().then((value)=>{
          switch(value){
            case "dokter": this.rootPage = TabsDokter; 
              break;
            case "pasien": this.rootPage = TabsPage;
              break;
            default : this.rootPage = Login;
              break;
          }
        })
      } else {
         this.rootPage = Login;
      }    
    });
  }
}
