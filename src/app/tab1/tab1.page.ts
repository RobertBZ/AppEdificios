import { Component } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalHabitacionEditPage } from '../modal-habitacion-edit/modal-habitacion-edit.page';
import { ModalRegistroAreaViviendaPage } from '../modal-registro-area-vivienda/modal-registro-area-vivienda.page';
import { AreaViviendaService } from '../services/area-vivienda/area-vivienda.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
import { EdificioService } from '../services/edificio/edificio.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  bandera : Boolean = true;
  bandera2 : Boolean;
  Edificio : any [] = [];
  areas :any [] = [];
  viviendas : any [] = [];

  constructor(
    public modalController : ModalController, 
    private router:Router, 
    public alertCtrl : AlertController, 
    public area : AreaViviendaService,
    private db : AngularFireDatabase,
    private edificio: EdificioService) { 
      //Inicializacion
    this.sacer().subscribe(data=>{
      this.areas = data;
      console.log("El item areas: ",this.areas);
    });
    this.sacerViviendas().subscribe(data=>{
      console.log(data);
      this.viviendas = data;
      console.log("El item: ",this.viviendas);
    });
  }

  datos(cond : number){
    if(cond == 1){
      this.bandera = true;
      this.bandera2 = false;
    }else{
      this.bandera2 = true;
      this.bandera = false;
    }
  }

  sacer(){
    return this.db.list('AreaComun/'+ this.edificio.edificioOnly)
    .snapshotChanges()
    .pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }

  sacerViviendas(){
    return this.db.list('Vivienda/'+ this.edificio.edificioOnly)
    .snapshotChanges()
    .pipe(map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }))
  }
  
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
