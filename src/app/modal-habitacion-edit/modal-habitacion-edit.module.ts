import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalHabitacionEditPage } from './modal-habitacion-edit.page';

const routes: Routes = [
  {
    path: '',
    component: ModalHabitacionEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalHabitacionEditPage]
})
export class ModalHabitacionEditPageModule {}
