import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './paednurse/login/login.component';
import { PaednurseComponent } from './paednurse/paednurse.component';

const routes: Routes = [
  {path: "paednurse", component : PaednurseComponent},
  {path: "login", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
