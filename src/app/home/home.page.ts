import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Edificio } from '../models/edificio';
import { ServiciosService } from '../services/servicios.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  i: number = 0;
  listaEdificio: any;
  listActiva: boolean;

  constructor(private router: Router, private service: ServiciosService) {
    this.cargarEdificio();
    this.listActiva = false;
    this.listaEdificio = null;
  }

  detalles() {
    this.router.navigate(['tabs']);
  }

  registrarEdificio() {
    this.router.navigate(["add-edificio"]);
  }

  async cargarEdificio() {
    await this.service.getEdidicios();
    
    this.listaEdificio = await this.service.getEdidicios(); 
    
    //console.log("HTML:   ", this.listaEdificio);


    /*console.log("La lista de datos es: ", this.listaEdificio);
    console.log(typeof(this.listaEdificio))
    
    

    console.log("lista actual:   ", this.listaEdificio[0].nombre);*/
    
    //this.listActiva = true;

    //console.log("LIsta de edificios:  ", this.listaEdificio);
  }
}
