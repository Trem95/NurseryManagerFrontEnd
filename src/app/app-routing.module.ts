import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePaednurseComponent } from './create/create-paednurse/create-paednurse.component';
import { LoginComponent } from './paednurse/login/login.component';
import { PaednurseComponent } from './paednurse/paednurse.component';

const routes: Routes = [
  {path: "paednurse", component : PaednurseComponent},
  {path: "paednurse/delete/:id", pathMatch: 'full', redirectTo : "paednurse"},
  {path: "paednurse/update", pathMatch: 'full', redirectTo : "paednurse"},
  {path: "paednurse/create", component : CreatePaednurseComponent},
  {path: "login", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
