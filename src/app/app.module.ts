import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InscriCentreComponent } from './inscri-centre/inscri-centre.component';
import { FooterComponent } from './footer/footer.component';
import { CentreUserService } from './services/CentreUser.service';
import { EspaceCentreComponent } from './espace-centre/espace-centre.component';
import { CentreProfilComponent } from './centre-profil/centre-profil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CentreServiceComponent } from './centre-service/centre-service.component';
import { CentrePromotionComponent } from './centre-promotion/centre-promotion.component';
import { CentreReservationComponent } from './centre-reservation/centre-reservation.component';
import { CentreGallerieComponent } from './centre-gallerie/centre-gallerie.component';
import { DashNavComponent } from './dash-nav/dash-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    InscriCentreComponent,
    HeaderComponent,
    InscriCentreComponent,
    FooterComponent,
    EspaceCentreComponent,
    CentreProfilComponent,
    DashboardComponent,
    CentreServiceComponent,
    CentrePromotionComponent,
    CentreReservationComponent,
    CentreGallerieComponent,
    DashNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule, 
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    RouterModule
  ],
  providers: [
    CentreUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
