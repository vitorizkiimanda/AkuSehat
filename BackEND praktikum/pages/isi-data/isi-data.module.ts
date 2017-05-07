import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsiData } from './isi-data';

@NgModule({
  declarations: [
    IsiData,
  ],
  imports: [
    IonicPageModule.forChild(IsiData),
  ],
  exports: [
    IsiData
  ]
})
export class IsiDataModule {}
