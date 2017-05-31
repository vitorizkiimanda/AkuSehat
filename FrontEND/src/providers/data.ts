import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {
  // public BASE_URL = 'http://localhost/akusehat/localhost';
  public BASE_URL = 'http://akusehat.pe.hu';
  
  public HAS_LOGGED_IN = 'status_login';
  
  constructor(public http: Http , public storage: Storage) {
    console.log('Hello Data Provider');
  }

  login(data : any,role:string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('user_data', data);
    this.storage.set('role', role);
  };

  logout() {
    this.storage.remove(this.HAS_LOGGED_IN);
    this.storage.remove('user_data');
    this.storage.remove('role');
  };

  isLogin(){
    return this.storage.get(this.HAS_LOGGED_IN).then((value)=>{
      return value;
    });
  }
  getRole(){
    return this.storage.get('role').then((value)=>{
      return value;
    });
  }
  //ini kalo mau save ke local storage--> cache file gitu,, keren lah

  // dapetnnya pas dari login
  getDataPasien() {
    return this.storage.get('user_data').then((value) => {
      return value;
    });
  }
  getDataDokter() {
    return this.storage.get('user_data').then((value) => {
      return value;
    });
  }

}
