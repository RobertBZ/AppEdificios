import { Component, OnInit } from '@angular/core';
import { Edificio } from '../models/edificio';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-add-edificio',
  templateUrl: './add-edificio.page.html',
  styleUrls: ['./add-edificio.page.scss'],
})
export class AddEdificioPage implements OnInit {

  // variables de uso Externo e Interno
  edificio: Edificio;

  constructor(private router: Router) { 
    //Inicializacion
    this.edificio = new Edificio;

  }

  ngOnInit() {
  }

  agregarEdificio(){
    console.log("Guardar Edificio -> ", this.edificio);
   /* let userOnly = 1;
    let cantidad = 2;
    firebase.database().ref('/edificio/'+userOnly+'/'+cantidad).set({
      descripcion: this.edificio.descripcion,
      direccion: this.edificio.direccion,
      expensas: this.edificio.expensas,
      nombre: this.edificio.nombre,
      numeroDomicilio: this.edificio.nroDomicilio,
      numeroRecepcion: this.edificio.nroRecepcion,
    })
    console.log("datos agregados");*/
    
  }

  return(){
    this.router.navigate(['home']);
  }
}
