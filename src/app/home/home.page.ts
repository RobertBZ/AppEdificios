import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { EdificioService } from '../services/edificio/edificio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listaEdificio: any;
  referencia: any;

  constructor(
    private router: Router, 
    private db: AngularFireDatabase,
    private eddificio: EdificioService) {
      //Inicializacion
    this.listarEdificios();
  }

  detalles(edificioId: any) {
    this.eddificio.edificioOnly = edificioId;
    console.log("Ide modificar: ", edificioId);
    //this.router.navigate(['tabs']);
  }

  registrarEdificio() {
    this.router.navigate(["add-edificio"]);
  }

  // Consumo de FIREBASE REALTIME
  consultar() {
    return this.db.list('Edificio')
      .snapshotChanges()
      .pipe(map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      }));
  }

  async listarEdificios() {
    this.referencia = this.db.list('Edificio');
    this.consultar().subscribe(data => {
      this.listaEdificio = data;
      console.log("Datos Obtenidos:  ", this.listaEdificio);
    });
  }

  eliminarEdificio(idEdificio: any) {
    this.referencia = this.db.object('Edificio/' + idEdificio);
    this.referencia.remove();
    
    console.log("Eliminado", idEdificio);
  }
}
