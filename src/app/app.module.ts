import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaednurseComponent } from './paednurse/paednurse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './paednurse/login/login.component';
import { EncrDecrService } from './service/encrDecrService/encr-decr.service';
import { CreatePaednurseComponent } from './create/create-paednurse/create-paednurse.component';
import { BabyComponent } from './baby/baby.component';
import { CreateBabyComponent } from './create/create-baby/create-baby.component';
import { DetailsComponent } from './baby/details/details.component';
import { HomeComponent } from './home/home.component';
import { CreateObservationComponent } from './create/create-observation/create-observation.component';

@NgModule({
  declarations: [			
    AppComponent,
      PaednurseComponent,
      CreatePaednurseComponent,
      NavbarComponent,
      LoginComponent,
      BabyComponent,
      CreateBabyComponent,
      DetailsComponent,
      HomeComponent,
      CreateObservationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
