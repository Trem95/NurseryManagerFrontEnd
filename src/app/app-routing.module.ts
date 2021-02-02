import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BabyComponent } from './baby/baby.component';
import { DetailsComponent } from './baby/details/details.component';
import { CreateBabyComponent } from './create/create-baby/create-baby.component';
import { CreatePaednurseComponent } from './create/create-paednurse/create-paednurse.component';
import { LoginComponent } from './paednurse/login/login.component';
import { PaednurseComponent } from './paednurse/paednurse.component';

const routes: Routes = [
  {path: "paednurse", component : PaednurseComponent},
  {path: "paednurse/delete/:id", pathMatch: 'full', redirectTo : "paednurse"},
  {path: "paednurse/update", pathMatch: 'full', redirectTo : "paednurse"},
  {path: "paednurse/create", component : CreatePaednurseComponent},
  {path: "baby", component : BabyComponent},
  {path: "baby/delete/:id",pathMatch: 'full', redirectTo: "baby"},
  {path: "baby/update",pathMatch: 'full',redirectTo: "baby"},
  {path: "baby/create", component : CreateBabyComponent},
  {path: "baby/details/:id", component : DetailsComponent},
  {path: "login", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
