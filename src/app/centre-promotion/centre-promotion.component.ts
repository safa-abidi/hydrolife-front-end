import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentreUserService } from '../services/CentreUser.service';
import { CentreUser } from '../models/CentreUser.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-centre-promotion',
  templateUrl: './centre-promotion.component.html',
  styleUrls: ['./centre-promotion.component.scss']
})
export class CentrePromotionComponent implements OnInit {

  
  info: any;
  id: any;

  constructor(
    private http: HttpClient,
              private userService: CentreUserService,
              private route: ActivatedRoute
  ) { 
    this.id = localStorage.getItem("myId");
  }

  ngOnInit(): void {

    let idUser = this.route.snapshot.params.id;
    console.log(idUser);
    
    
     
    this.userService.getAllPromotionsOfCenter(idUser).subscribe(
      (result)=>{
        
        this.info = result;
        console.log(result);
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  delete(promotion: any){ 

    let index = this.info.indexOf(promotion);
    this.info.splice(index, 1);

    this.userService.deletePromotion(promotion.id_promo).subscribe(
      res=>{
        
        console.log(res);
        
      },
      err =>{
        console.log(err);
      }
    );
  }

}
