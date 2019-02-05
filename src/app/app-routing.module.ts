import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list', loadChildren: './list/list.module#ListPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'singup', loadChildren: './singup/singup.module#SingupPageModule' },
  { path: 'add-edificio', loadChildren: './add-edificio/add-edificio.module#AddEdificioPageModule' },
  { path: 'perfil', loadChildren: './perfil/perfil.module#PerfilPageModule' },  { path: 'modal-habitacion-edit', loadChildren: './modal-habitacion-edit/modal-habitacion-edit.module#ModalHabitacionEditPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
