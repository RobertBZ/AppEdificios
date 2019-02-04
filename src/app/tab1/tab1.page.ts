import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

var Edificio;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Edificio : any;
  constructor(private navCtrl:NavController, private router:Router) { }

  detalles() {
    this.navCtrl.navigateRoot(['tabs/tabs/tab2'])
  }
  registrarEdificio(){
    console.log("registrar edificios");
    this.router.navigate(["add-edificio"])
  }
}
