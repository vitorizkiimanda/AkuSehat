import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class Data {
  public BASE_URL = 'http://localhost/akusehat/BackEND';
  public HAS_LOGGED_IN = 'status_login';
  
  constructor(public http: Http , public storage: Storage) {
    console.log('Hello Data Provider');
  }

  login(data : string) {
    this.storage.set(this.HAS_LOGGED_IN, true);
    this.storage.set('user_data', data);
  };

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
