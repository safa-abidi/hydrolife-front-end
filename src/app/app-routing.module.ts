import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriCentreComponent} from './inscri-centre/inscri-centre.component';
import { EspaceCentreComponent } from './espace-centre/espace-centre.component';
import { CentreProfilComponent } from './centre-profil/centre-profil.component';
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
import { AjouterGallerieComponent } from './ajouter-gallerie/ajouter-gallerie.component';
import { LesCentresComponent } from './les-centres/les-centres.component';
import { CentreDetailComponent } from './centre-detail/centre-detail.component';
import { InscriClientComponent } from './inscri-client/inscri-client.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ClientProfilComponent } from './client-profil/client-profil.component';
import { UpdateClientProfilComponent } from './update-client-profil/update-client-profil.component';
import { MyReservationComponent } from './my-reservation/my-reservation.component';






import { AuthGuard } from './auth.guard';
import { ClientAuthGuard } from './authClient.guard';
import { ResAuthGuard } from './authRes.guard';
import { ClienttAuthGuard } from './authClientt.guard';


const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'Home/:idClient', component: HomeComponent, canActivate:[ClientAuthGuard] },
  { path: '', component: HomeComponent },
  { path: 'InscriCentre', component: InscriCentreComponent },
  { path: 'EspaceCentre', component: EspaceCentreComponent },
  { path: 'CentreProfil/:id', component: CentreProfilComponent, canActivate:[AuthGuard] },
  { path: 'CentrePromotion/:id', component: CentrePromotionComponent, canActivate:[AuthGuard] },
  { path: 'CentreReservation/:id', component: CentreReservationComponent, canActivate:[AuthGuard] },
  { path: 'CentreService/:id', component: CentreServiceComponent, canActivate:[AuthGuard] },
  { path: 'CentreGallerie/:id', component: CentreGallerieComponent, canActivate:[AuthGuard] },
  { path: 'UpdateCentreProfil/:id', component: UpdateCentreProfilComponent , canActivate:[AuthGuard] },
  { path: 'AjouterService/:id', component: AjouterServiceComponent , canActivate:[AuthGuard] },
  { path: 'UpdateService/:id_service', component: UpdateServiceComponent , canActivate:[AuthGuard] },
  { path: 'AjouterPromotion/:id', component: AjouterPromotionComponent , canActivate:[AuthGuard] },
  { path: 'UpdatePromotion/:id_promo', component: UpdatePromotionComponent , canActivate:[AuthGuard] },
  { path: 'AjouterGallerie/:id', component: AjouterGallerieComponent , canActivate:[AuthGuard] },
  { path: 'LesCentres', component: LesCentresComponent },
  { path: 'LesCentres/:id', component: LesCentresComponent, canActivate:[ResAuthGuard] },
  { path: 'CentreDetail/:id', component: CentreDetailComponent },
  { path: 'InscriClient', component: InscriClientComponent },
  { path: 'LoginClient', component: LoginClientComponent, canActivate:[ClienttAuthGuard] },
  { path: 'Reservation/:id', component: ReservationComponent, canActivate:[ResAuthGuard] },
  { path: 'MonProfil/:id', component: ClientProfilComponent, canActivate:[ClientAuthGuard] },
  { path: 'UpdateClientProfil/:id', component: UpdateClientProfilComponent, canActivate:[ClientAuthGuard] },
  { path: 'MyReservation/:id', component: MyReservationComponent, canActivate:[ResAuthGuard] },

  












  { path: 'Not-Found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/Not-Found' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
