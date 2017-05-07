import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BayarUpload } from './bayar-upload';

@NgModule({
  declarations: [
    BayarUpload,
  ],
  imports: [
    IonicPageModule.forChild(BayarUpload),
  ],
  exports: [
    BayarUpload
  ]
})
export class BayarUploadModule {}
