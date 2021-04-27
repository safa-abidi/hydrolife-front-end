import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { PromotionUpdate } from '../models/PromotionUpdate.model';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-promotion',
  templateUrl: './update-promotion.component.html',
  styleUrls: ['./update-promotion.component.scss']
})
export class UpdatePromotionComponent implements OnInit {

  updatePromotionForm: FormGroup
  id = localStorage.getItem("myId");


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
        Validators.required
      ]),
      date_fin_promo: new FormControl('',[
        Validators.required
      ])
    }

    this.updatePromotionForm = this.fb.group(formControls);
   }


   get titre_promo() { return this.updatePromotionForm.get('titre_promo') }
   get description_promo() { return this.updatePromotionForm.get('description_promo') }
   get pourcentage() { return this.updatePromotionForm.get('pourcentage') }
   get date_debut_promo() { return this.updatePromotionForm.get('date_debut_promo') }
   get date_fin_promo() { return this.updatePromotionForm.get('date_fin_promo') }

   pipe = new DatePipe('en-US');
  now = Date.now();



  ngOnInit(): void {

   

    let idProm = this.route.snapshot.params.id_promo;
    
    this.userService.getOnePromotion(idProm).subscribe(
      (res: any)=>{
        let Promotion = res;

        this.updatePromotionForm .patchValue({
          titre_promo: Promotion.titre_promo,
          description_promo: Promotion.description_promo,
          pourcentage: Promotion.pourcentage,
          date_debut_promo: Promotion.date_debut_promo,
          date_fin_promo: Promotion.date_fin_promo,

        });
        
      },
      (err: any)=>{
        console.log(err);
      }
    )

  }

  updatePromotion() {
    let data = this.updatePromotionForm.value;
    let idProm = this.route.snapshot.params.id_promo;
    let promotion= new PromotionUpdate(
      idProm,
      data.titre_promo,
      data.description_promo,
      data.date_debut_promo,
      data.date_fin_promo,
      data.pourcentage
    )
    this.userService.updatePromotion(promotion).subscribe(
      res=>{
        this.toastr.success("promotion mit à jour avec succès");

       this.router.navigate(['/CentrePromotion/'+localStorage.getItem("myId")]);

      },
      err=>{
        console.log(err);
      }
    );

  }
  range = new FormGroup({
    date_debut_promo: new FormControl(),
    date_fin_promo: new FormControl()
  });
}
