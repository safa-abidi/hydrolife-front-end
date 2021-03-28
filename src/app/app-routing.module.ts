import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriCentreComponent} from './inscri-centre/inscri-centre.component';
import { EspaceCentreComponent } from './espace-centre/espace-centre.component';
import { CentreProfilComponent } from './centre-profil/centre-profil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CentrePromotionComponent } from './centre-promotion/centre-promotion.component';
import { CentreReservationComponent } from './centre-reservation/centre-reservation.component';
import { CentreServiceComponent } from './centre-service/centre-service.component';
import { CentreGallerieComponent } from './centre-gallerie/centre-gallerie.component';
import { UpdateCentreProfilComponent } from './update-centre-profil/update-centre-profil.component';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { AjouterPromotionComponent } from './ajouter-promotion/ajouter-promotion.component';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AjouterGallerieComponent } from './ajouter-gallerie/ajouter-gallerie.component';




import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'DashBoard/:id', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'InscriCentre', component: InscriCentreComponent },
  { path: 'EspaceCentre', component: EspaceCentreComponent },
  { path: 'CentreProfil/:id', component: CentreProfilComponent, canActivate:[AuthGuard] },
  { path: 'CentrePromotion/:id', component: CentrePromotionComponent, canActivate:[AuthGuard] },
  { path: 'CentreReservation', component: CentreReservationComponent, canActivate:[AuthGuard] },
  { path: 'CentreService/:id', component: CentreServiceComponent, canActivate:[AuthGuard] },
  { path: 'CentreGallerie/:id', component: CentreGallerieComponent, canActivate:[AuthGuard] },
  { path: 'UpdateCentreProfil/:id', component: UpdateCentreProfilComponent , canActivate:[AuthGuard] },
  { path: 'AjouterService/:id', component: AjouterServiceComponent , canActivate:[AuthGuard] },
  { path: 'UpdateService/:id_service', component: UpdateServiceComponent , canActivate:[AuthGuard] },
  { path: 'AjouterPromotion/:id', component: AjouterPromotionComponent , canActivate:[AuthGuard] },
  { path: 'UpdatePromotion/:id_promo', component: UpdatePromotionComponent , canActivate:[AuthGuard] },
  { path: 'Gallery/:id', component: GalleryComponent , canActivate:[AuthGuard] },
  { path: 'AjouterGallerie/:id', component: AjouterGallerieComponent , canActivate:[AuthGuard] },










  { path: 'Not-Found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/Not-Found' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
