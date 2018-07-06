import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

let pageNum = 2;

@Component({
  templateUrl: 'settings.html'
})
export class SettingsPage {
  pageNum = pageNum;

  constructor(public navCtrl: NavController) {}

  push() {
    this.navCtrl.push(SettingsPage);
  }

//   pop() {
//     if (pageNum > 2) {
//       pageNum--;
//     }
//     this.navCtrl.pop();
//   }
}