import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../services/Reservation.service';
import { ClientUserService } from '../services/ClientUser.service';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit {

  info:any;
  userInfo:any;

  constructor(
    private resService: ReservationService,
    private clientService: ClientUserService

  ) { }

  ngOnInit(): void {

    let id = localStorage.getItem("idRes")

    this.resService.getOneRes(id).subscribe(
      res=>{
        
        this.info = res;
        localStorage.removeItem("idRes")
        this.clientService.getOneClient(this.info.idClient).subscribe(
          res => {
          this.userInfo = res;

        }
      )
    },
      err =>{
        console.log(err);
      }
    );

  }

}
