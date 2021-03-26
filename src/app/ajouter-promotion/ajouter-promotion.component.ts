import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { Promotion } from '../models/Promotion.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-promotion',
  templateUrl: './ajouter-promotion.component.html',
  styleUrls: ['./ajouter-promotion.component.scss']
})



export class AjouterPromotionComponent implements OnInit {

  
  addPromotionForm: FormGroup
  idUser: number | undefined;

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private userService:CentreUserService,
    private router : Router,
    private toastr: ToastrService
  ) { 
    let formControls = {
      titre_promo: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z/ é è / .'-]+")
      ]),
      description_promo: new FormControl('',[
        Validators.required
      ]),
      pourcentage: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      date_debut_promo: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9.'-]+")
      ]),
      date_fin_promo: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9.'-]+")
      ])
    }

    this.addPromotionForm = this.fb.group(formControls)
    
   }


    
  get titre_promo() { return this.addPromotionForm.get('titre_promo') }
  get description_promo() { return this.addPromotionForm.get('description_promo') }
  get pourcentage() { return this.addPromotionForm.get('pourcentage') }
  get date_debut_promo() { return this.addPromotionForm.get('date_debut_promo') }
  get date_fin_promo() { return this.addPromotionForm.get('date_fin_promo') }

  ngOnInit(): void {
  }

  addPromotion(){

    let idUser = localStorage.getItem("myId");
    let data = this.addPromotionForm.value;
    
    let promotion = new Promotion(
      data.titre_promo,
      data.description_promo,
      data.date_debut_promo,
      data.date_fin_promo,
      data.pourcentage
      );
      
    this.userService.addPromotion(promotion).subscribe(
      res=>{
        
        this.toastr.success("promotion ajouté avec succès");

       this.router.navigate(['/CentrePromotion/'+ idUser]);
      },
      err=>{
        this.toastr.error("Promotion non ajouté");
      }
    );
    
  }

  /*minDate = new Date()
  maxDate = new Date(2019, 1, 25)

  dateFilter = (date: any) => {
    const day = date.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }*/

}
