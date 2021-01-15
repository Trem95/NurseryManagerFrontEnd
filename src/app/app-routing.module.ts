import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaednurseComponent } from './paednurse/paednurse.component';

const routes: Routes = [
  {path: "Puericultrice", component : PaednurseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
