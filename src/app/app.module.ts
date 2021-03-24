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
import { UpdateCentreProfilComponent } from './update-centre-profil/update-centre-profil.component';
import { AjouterServiceComponent } from './ajouter-service/ajouter-service.component';
import { UpdateServiceComponent } from './update-service/update-service.component';
import { AjouterPromotionComponent } from './ajouter-promotion/ajouter-promotion.component';
import { UpdatePromotionComponent } from './update-promotion/update-promotion.component';
import {A11yModule} from '@angular/cdk/a11y';
import {ClipboardModule} from '@angular/cdk/clipboard';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
import {OverlayModule} from '@angular/cdk/overlay';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';



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
    DashNavComponent,
    UpdateCentreProfilComponent,
    AjouterServiceComponent,
    UpdateServiceComponent,
    AjouterPromotionComponent,
    UpdatePromotionComponent

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
    RouterModule,
    A11yModule,
    ClipboardModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    ScrollingModule,
  ],
  providers: [
    CentreUserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
