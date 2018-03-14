import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ButtonPage} from '../button/button';
import {ListPage} from '../list/list';
import {CardPage} from '../card/card';
import {GesturePage} from '../gesture/gesture';
import {APage} from '../a/a';
import {FabPage} from '../fab/fab';
import {GridPage} from '../grid/grid';
import {FormPage} from '../form/form';
import {ToastPage} from "../toast/toast";
import {SignInPage} from "../sign-in/sign-in";
import {AlertPage} from "../alert/alert";
import {IconPage} from "../icon/icon";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  buttonPage;
  listPage;
  cardPage;
  gesturePage;
  aPage;
  fabPage;
  gridPage;
  formPage;
  toastPage;
  signInPage;
  alertPage;
  iconPage;

  constructor(public navCtrl: NavController) {
    this.buttonPage = ButtonPage;
    this.listPage = ListPage;
    this.cardPage = CardPage;
    this.gesturePage = GesturePage;
    this.aPage = APage;
    this.fabPage = FabPage;
    this.gridPage = GridPage;
    this.formPage = FormPage;
    this.toastPage = ToastPage;
    this.signInPage = SignInPage;
    this.alertPage = AlertPage;
    this.iconPage = IconPage;
  }

  toLazyPage():void {
    this.navCtrl.push('LazyPage');
  }

}
