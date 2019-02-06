import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Edificio } from '../models/edificio';
import { ServiciosService } from '../services/servicios.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { EdificioService } from '../services/edificio/edificio.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  i: number = 0;
  listaEdificio: any;
  userref: any;

  constructor(
    private router: Router, 
    private service: ServiciosService,
    private db: AngularFireDatabase,
    private eddificio: EdificioService) {
      //Inicializacion
    this.listarEdificios();
  }

  detalles(edificioId: any) {
    this.eddificio.edificioOnly = edificioId;
    this.router.navigate(['tabs']);
  }

  registrarEdificio() {
    this.router.navigate(["add-edificio"]);
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
      this.listaEdificio = data;
      console.log("Datos Obtenidos:  ", this.listaEdificio);
    });
  }
}
