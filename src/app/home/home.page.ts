import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) { }
  
  detalles() {
    this.router.navigate(['tabs']);
  }
  
  registrarEdificio(){
    this.router.navigate(["add-edificio"])
  }
}
