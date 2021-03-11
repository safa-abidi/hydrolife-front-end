import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InscriCentreComponent } from './inscri-centre/inscri-centre.component';
import { LogInCentreComponent } from './log-in-centre/log-in-centre.component';
import { FooterComponent } from './footer/footer.component';
import { CentreUserService } from './services/CentreUser.service';


@NgModule({
  declarations: [
    AppComponent,
    InscriCentreComponent,
    HeaderComponent,
    LogInCentreComponent,
    InscriCentreComponent,
    LogInCentreComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CentreUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
