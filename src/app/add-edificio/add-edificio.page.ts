import { Component, OnInit } from '@angular/core';
import { Edificio } from '../models/edificio';
import { Router } from '@angular/router';

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
  }

  return(){
    this.router.navigate(['home']);
  }
}
