import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriCentreComponent} from './inscri-centre/inscri-centre.component';
import { EspaceCentreComponent } from './espace-centre/espace-centre.component';
import { CentreProfilComponent } from './centre-profil/centre-profil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CentrePromotionComponent } from './centre-promotion/centre-promotion.component';
import { CentreReservationComponent } from './centre-reservation/centre-reservation.component';
import { CentreServiceComponent } from './centre-service/centre-service.component';
import { CentreGallerieComponent } from './centre-gallerie/centre-gallerie.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'DashBoard/:id', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'InscriCentre', component: InscriCentreComponent },
  { path: 'EspaceCentre', component: EspaceCentreComponent },
  { path: 'CentreProfil/:id', component: CentreProfilComponent, canActivate:[AuthGuard] },
  { path: 'CentrePromotion', component: CentrePromotionComponent, canActivate:[AuthGuard] },
  { path: 'CentreReservation', component: CentreReservationComponent, canActivate:[AuthGuard] },
  { path: 'CentreService', component: CentreServiceComponent, canActivate:[AuthGuard] },
  { path: 'CentreGallerie', component: CentreGallerieComponent, canActivate:[AuthGuard] },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
