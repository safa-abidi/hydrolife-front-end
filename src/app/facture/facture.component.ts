import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientUserService } from '../services/ClientUser.service';
import { CentreUserService } from '../services/CentreUser.service';
import { ReservationService } from '../services/Reservation.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.scss']
})
export class FactureComponent implements OnInit {

  info:any;
  infoRes:any;
  infoCentre:any;
  infoSer:any;
  idRes = localStorage.getItem("idRes"); 

  constructor(
    public userService: ClientUserService,
    public centreService: CentreUserService,
    public ResService: ReservationService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getRes();

    let id = this.route.snapshot.params.id;

    this.userService.getOneClient(id).subscribe(
      (result)=>{ 
        this.info = result;

      }
    );  
  }

  getRes(){
    
    this.ResService.getOneRes(this.idRes).subscribe(
      (result)=> {
        this.infoRes = result;
        console.log(result);
        
       
    this.centreService.getOneUser(this.infoRes?.idCentre).subscribe(
      (res)=> {
        this.infoCentre = res;
        console.log(res);
        
        }
      ) ,
      this.centreService.getOneService(this.infoRes?.idService).subscribe(
        (response)=> {
          this.infoSer = response;
          console.log(response);
          
          //localStorage.removeItem("idRes")
          
          }
        )    
    }
  );
}

}
