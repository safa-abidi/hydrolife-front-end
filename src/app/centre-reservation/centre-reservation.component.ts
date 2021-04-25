import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ReservationService } from '../services/Reservation.service';
import { ReservationDetailComponent } from '../reservation-detail/reservation-detail.component'

@Component({
  selector: 'app-centre-reservation',
  templateUrl: './centre-reservation.component.html',
  styleUrls: ['./centre-reservation.component.scss']
})
export class CentreReservationComponent implements OnInit {

  info:any;
  infoClient:any;
  infoService:any;

  constructor(
    private resService: ReservationService,
    private toastr: ToastrService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {

    let id = localStorage.getItem("myId");

    this.resService.getAllResOfCentre(id).subscribe(
      (result)=>{
        this.info = result;

      },
      (error)=>{
        console.log(error);
      }
    )

  }

  delete(reservation: any){ 

    let index = this.info.indexOf(reservation);
    this.info.splice(index, 1);

    this.resService.deleteRes(reservation.id_res).subscribe(
      res=>{
        
        this.toastr.show("réservation annulée");
        
      },
      err =>{
        console.log(err);
      }
    );
  }

  openDialog(id_res:any) {
   localStorage.setItem("idRes",id_res)
    this.dialog.open(ReservationDetailComponent);
  }

}