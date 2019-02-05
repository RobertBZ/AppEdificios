import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Edificio } from '../models/edificio';
=======
import { Router } from '@angular/router';
>>>>>>> 88bd5cbc2b05272f6b85f81f9344d91abec68518

@Component({
  selector: 'app-add-edificio',
  templateUrl: './add-edificio.page.html',
  styleUrls: ['./add-edificio.page.scss'],
})
export class AddEdificioPage implements OnInit {

<<<<<<< HEAD
  // variables de uso Externo e Interno
  edificio: Edificio;

  constructor() { 
    //Inicializacion
    this.edificio = new Edificio;

  }

  ngOnInit() {
  }

  agregarEdificio(){
    console.log("Guardar Edificio -> ", this.edificio);
  }

=======
  constructor(private router: Router) { }

  ngOnInit() {
  }
  return(){
    this.router.navigate(['home']);
  }
>>>>>>> 88bd5cbc2b05272f6b85f81f9344d91abec68518
}
