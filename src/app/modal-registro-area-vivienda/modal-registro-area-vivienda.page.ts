import { Component, OnInit } from '@angular/core';
import { AreaViviendaService } from '../services/area-vivienda/area-vivienda.service';
import { Router } from '@angular/router';
import { AreaComun } from '../models/area-comun';
import { Vivienda } from '../models/vivienda';
import { ModalController } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Component({
  selector: 'app-modal-registro-area-vivienda',
  templateUrl: './modal-registro-area-vivienda.page.html',
  styleUrls: ['./modal-registro-area-vivienda.page.scss'],
})
export class ModalRegistroAreaViviendaPage implements OnInit {

  userDb : any;
  areaComun : AreaComun;
  vivienda : Vivienda;
  cantArea : number = 0;

  constructor(public area : AreaViviendaService,private router: Router,public modal:ModalController, private db : AngularFireDatabase) {
    console.log(area.tipo)
    this.userDb = this.db.list('/AreaComun/key/');
    this.areaComun = new AreaComun;
    this.vivienda = new Vivienda;
  }
  
  ngOnInit() {
  }

  return(){
    this.modal.dismiss();
  }

  anadirArea(){
    //this.cantArea++;
    var area = 'area';
    firebase.database().ref('/AreaComun/key/'+area).set({
      nombre : this.areaComun.NombreArea,
      precio : this.areaComun.precio,
    });
  }
}
