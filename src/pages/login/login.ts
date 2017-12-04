import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild(Nav) nav: Nav;
  deviceWidth: number;
  deviceHeight: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, platform: Platform, statusBar: StatusBar) {
    this.deviceWidth = platform.width();
    this.deviceHeight = platform.height();
    console.log(this.deviceHeight);
    statusBar.overlaysWebView(true);
    statusBar.hide();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logEvent() {
    this.navCtrl.setRoot(HomePage);

  }

}
