import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { comingsoonPage } from '../comingsoon/comingsoon';
import { signinPage } from '../signin/signin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  signIn() {
    this.navCtrl.push(signinPage);
  }

  comingSoon() {
    this.navCtrl.push(comingsoonPage);
  }
}
