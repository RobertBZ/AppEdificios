import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { Edificio } from '../models/edificio';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { Identifiers } from '@angular/compiler';


@Component({
  selector: 'app-add-edificio',
  templateUrl: './add-edificio.page.html',
  styleUrls: ['./add-edificio.page.scss'],
})
export class AddEdificioPage implements OnInit {

  // variables de uso Externo e Interno
  edificio: Edificio;
  userref: any;
  items: any;


  constructor(
    private router: Router,
    private db: AngularFireDatabase) {
    //Inicializacion
    this.edificio = new Edificio;


    //Pruebas de consultas
    this.listarEdificios();
  }

  ngOnInit() {
  }

  async agregarEdificio() {

    console.log("Guardar A Edificio -> ", this.edificio);
    firebase.database().ref('/Edificio/').push({
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

  sacar() {
    return this.db.list('Edificio')
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      }));
  }

  async listarEdificios() {
    this.userref = this.db.list('Edificio');
    this.sacar().subscribe(data => {
      this.items = data;
      console.log("Datos Obtenidos:  ", this.items);
    });
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
