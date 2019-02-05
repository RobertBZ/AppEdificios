import { Component, OnInit } from '@angular/core';
import { AreaViviendaService } from '../services/area-vivienda/area-vivienda.service';

@Component({
  selector: 'app-modal-registro-area-vivienda',
  templateUrl: './modal-registro-area-vivienda.page.html',
  styleUrls: ['./modal-registro-area-vivienda.page.scss'],
})
export class ModalRegistroAreaViviendaPage implements OnInit {

  constructor(public area : AreaViviendaService) {
    console.log(area.tipo)
  }

  ngOnInit() {
  }

}
