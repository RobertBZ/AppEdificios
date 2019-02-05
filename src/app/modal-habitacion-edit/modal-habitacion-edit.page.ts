import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-habitacion-edit',
  templateUrl: './modal-habitacion-edit.page.html',
  styleUrls: ['./modal-habitacion-edit.page.scss'],
})
export class ModalHabitacionEditPage implements OnInit {

  constructor(public modalController : ModalController) { }

  ngOnInit() {
  }
  back(){
    this.modalController.dismiss()
  }
}
