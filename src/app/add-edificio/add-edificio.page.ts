import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { Edificio } from '../models/edificio';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { CanDeactivate } from '@angular/router/src/utils/preactivation';
import { createNodeAtIndex } from '@angular/core/src/render3/instructions';
import { Key } from 'protractor';


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


    //Pruebas de consultas
    this.listarEdificios();
  }

  ngOnInit() {
  }

  generadorID(){
    let cadena: string;
    cadena = this.edificio.nombre + "00" + this.edificio.expensas; 
    return cadena;
  }

  async agregarEdificio() {
    this.edificio._id = this.generadorID();

    console.log("Guardar A Edificio -> ", this.edificio);
    firebase.database().ref('/Edificio/' + this.edificio._id + '/').set({
      descripcion: this.edificio.descripcion,
      direccion: this.edificio.direccion,
      expensas: this.edificio.expensas,
      nombre: this.edificio.nombre,
      numeroDomicilio: this.edificio.nroDomicilio,
      numeroRecepcion: this.edificio.nroRecepcion,
    });


    /*  firebase.database().ref('/edificio/'+userOnly+'/').push({
        descripcion: this.edificio.descripcion,
        direccion: this.edificio.direccion,
        expensas: this.edificio.expensas,
        nombre: this.edificio.nombre,
        numeroDomicilio: this.edificio.nroDomicilio,
        numeroRecepcion: this.edificio.nroRecepcion,
      })*/

    console.log("datos agregados");
    // this.return();
  }

  async listarEdificios() {
    let content: any;
    let keys: any;
    this.edificio._id = this.generadorID();
    
  await firebase.database().ref('/Edificio/').once('value').then((data) => {
      keys = data.
      content = data.val();
    });

    console.log("id: ", keys + " Contenido: ", content);
  }

  async buscarEdificio() {

  }

  async eliminarEdificio() {

  }

  async editarEdificio() {

  }

  return() {
    this.router.navigate(['home']);
  }
}
