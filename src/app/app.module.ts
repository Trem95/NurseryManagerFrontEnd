import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaednurseComponent } from './paednurse/paednurse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './paednurse/login/login.component';
import { RegisterComponent } from './paednurse/register/register.component';
import { EncrDecrService } from './service/encrDecrService/encr-decr.service';

@NgModule({
  declarations: [			
    AppComponent,
      PaednurseComponent,
      NavbarComponent,
      LoginComponent,
      RegisterComponent
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
