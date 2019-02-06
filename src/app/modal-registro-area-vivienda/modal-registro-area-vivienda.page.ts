import { Component, OnInit } from '@angular/core';
import { AreaViviendaService } from '../services/area-vivienda/area-vivienda.service';
import { Router } from '@angular/router';
import { AreaComun } from '../models/area-comun';
import { Vivienda } from '../models/vivienda';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-registro-area-vivienda',
  templateUrl: './modal-registro-area-vivienda.page.html',
  styleUrls: ['./modal-registro-area-vivienda.page.scss'],
})
export class ModalRegistroAreaViviendaPage implements OnInit {

  areaComun:AreaComun;
  vivienda:Vivienda;

  constructor(public area : AreaViviendaService,private router: Router,public modal:ModalController) {
    console.log(area.tipo)
    this.areaComun = new AreaComun;
    this.vivienda = new Vivienda;
  }
  return(){
    this.modal.dismiss();
  }

  ngOnInit() {
  }

}
