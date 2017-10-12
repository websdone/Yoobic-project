import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { masterlistPage } from '../masterlist/masterlist';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class signinPage {


  constructor(public navCtrl: NavController, public menu:MenuController) {

  }

  masterList() {
    this.navCtrl.push(masterlistPage);
  }

}
