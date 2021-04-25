import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ReservationService } from '../services/Reservation.service'

@Component({
  selector: 'app-my-reservation',
  templateUrl: './my-reservation.component.html',
  styleUrls: ['./my-reservation.component.scss']
})
export class MyReservationComponent implements OnInit {

  info:any;
today:any;
  currentdate:any;

  constructor(
    private resService: ReservationService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef

  ) { }

  

  ngOnInit(): void {

  //  let   today:any;
   // console.log(this.info?.date_debut_res < today);
   // this.isExpirationExpired(this.res);
//console.log(this.info?.date_debut_res);
//console.log(today);



    let id = this.route.snapshot.params.id;
    

    this.resService.getAllResOfClient(id).subscribe(
      (result)=>{
        let   today= new Date();
        this.info = result;
        console.log(result);
        for(let n:number = 0; n<this.info?.length; n++){ 

         // console.log(this.info?.[n].date_debut_res);
         // if ( this.info?.[n].date_debut_res !== today.getDate()) return console.log(today.getDate());
          
  
          
          
         }
       /* this.info?.date_debut_res  < this.today
        console.log(this.info.date_debut_res);*/
        
      },
      (error)=>{
        console.log(error);
      }
    )

  }

  history(){


  }
/*res:any;
  isExpirationExpired(res:any) {
    // your date logic here, recommend moment.js;
    return moment(res?.experationDate).isBefore(moment(this.today))
    
    
  }*/

}


/*
Safèè sent Yesterday at 12:34 AM
heya teb3a khatr adheka aleh nahkillk aleha , teb3a l affichage , 
heya kelmt historique todhher s3iba ema heya juste t9aren date reserva par rapport 
date lyoum keni asgher ray historique ken akber ray a venir*/