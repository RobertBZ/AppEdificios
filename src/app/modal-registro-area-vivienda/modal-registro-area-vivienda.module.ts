import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalRegistroAreaViviendaPage } from './modal-registro-area-vivienda.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRegistroAreaViviendaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalRegistroAreaViviendaPage]
})
export class ModalRegistroAreaViviendaPageModule {}
