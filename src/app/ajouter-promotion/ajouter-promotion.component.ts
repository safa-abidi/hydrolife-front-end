import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { Services } from '../models/Service.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CentreUser } from '../models/CentreUser.model';
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
        Validators.pattern("[A-Za-z .'-]+")
      ]),
      description_promo: new FormControl('',[
        Validators.required
      ]),
      pourcentage: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+")
      ])
    }

    this.addPromotionForm = this.fb.group(formControls)
    
   }
    
  get titre_promo() { return this.addPromotionForm.get('titre_promo') }
  get description_promo() { return this.addPromotionForm.get('description_promo') }
  get pourcentage() { return this.addPromotionForm.get('pourcentage') }

  ngOnInit(): void {
  }

  addPromotion(){

    let idUser = localStorage.getItem("myId");
    let data = this.addPromotionForm.value;
    
    let service = new Services(
      data.libelle_service,
      data.description_service,
      data.prix_service,  
      );
      
    this.userService.addService(service).subscribe(
      res=>{
        
        this.toastr.success(res.message);

       this.router.navigate(['/CentreService/'+ idUser]);
      },
      err=>{
        console.log(err);
      }
    );
    
  }

}
