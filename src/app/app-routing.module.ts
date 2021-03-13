import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInCentreComponent } from './log-in-centre/log-in-centre.component';
import { InscriCentreComponent} from './inscri-centre/inscri-centre.component';
import { EspaceCentreComponent } from './espace-centre/espace-centre.component';
import { CentreProfilComponent } from './centre-profil/centre-profil.component';

const routes: Routes = [
  { path: 'InscriCentre', component: InscriCentreComponent },
  { path: 'LogInCentre', component: LogInCentreComponent },
  { path: 'EspaceCentre', component: EspaceCentreComponent },
  { path: 'CentreProfil/:id', component: CentreProfilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
