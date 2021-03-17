import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInCentreComponent } from './log-in-centre/log-in-centre.component';
import { InscriCentreComponent} from './inscri-centre/inscri-centre.component';
import { EspaceCentreComponent } from './espace-centre/espace-centre.component';
import { CentreProfilComponent } from './centre-profil/centre-profil.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'InscriCentre', component: InscriCentreComponent },
  { path: 'LogInCentre', component: LogInCentreComponent },
  { path: 'EspaceCentre', component: EspaceCentreComponent },
  { path: 'CentreProfil', component: CentreProfilComponent, canActivate:[AuthGuard] },
  { path: 'DashBoard/{id}', component: DashboardComponent, canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
