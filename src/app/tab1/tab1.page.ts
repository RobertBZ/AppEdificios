import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalHabitacionEditPage } from '../modal-habitacion-edit/modal-habitacion-edit.page';
import { ModalRegistroAreaViviendaPage } from '../modal-registro-area-vivienda/modal-registro-area-vivienda.page';
import { AreaViviendaService } from '../services/area-vivienda/area-vivienda.service';

var Edificio;


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  Edificio : any;
  constructor(public modalController : ModalController, private router:Router, public alertCtrl : AlertController, public area : AreaViviendaService) { }

  
  registrarEdificio(){
    console.log("registrar edificios");
    this.router.navigate(["add-edificio"])
  }

  async edit() {
    const modal = await this.modalController.create({
      component: ModalHabitacionEditPage
    });
    return await modal.present();
  }

  async AlertController() {
      const confirm = await this.alertCtrl.create({
      message: 'Los Datos no se podran cambiar luego de aceptar',
      buttons: [
        {
          text: 'Cambiar Datos',
          handler: () => {
            console.log('Cambiando datos');
          }
        },
        {
          text: 'Continuar',
          handler: () => {
            console.log('Continuar llenando datos');
          }
        }
      ]
    });
    await confirm.present();
  }

  async alertAnadir() {
    const alert = await this.alertCtrl.create({
      header: 'Añadir',
      inputs: [
        {
          name: 'vivienda',
          type: 'radio',
          label: 'Vivienda',
          value: 'vivienda',
          checked: true
        },
        {
          name: 'Area Comun',
          type: 'radio',
          label: 'Area Comun',
          value: 'Area Comun'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: data => {
            this.modalAnadir(data);
            this.area.tipo= data;
            console.log('data:',data);
          }
        }
      ]
    });
    await alert.present();
  }

  async modalAnadir(tipo : any){
    const modal = await this.modalController.create({
      component: ModalRegistroAreaViviendaPage
    });
    return await modal.present();
  }
}
