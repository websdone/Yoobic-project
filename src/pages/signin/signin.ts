import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { masterlistPage } from '../masterlist/masterlist';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class signinPage {

  constructor(public navCtrl: NavController) {}

  masterList() {
    this.navCtrl.push(masterlistPage);
  }


}
