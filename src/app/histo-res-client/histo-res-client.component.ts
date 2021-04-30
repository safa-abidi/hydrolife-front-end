import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CentreUserService } from '../services/CentreUser.service';
import { ReservationService } from '../services/Reservation.service';

@Component({
  selector: 'app-histo-res-client',
  templateUrl: './histo-res-client.component.html',
  styleUrls: ['./histo-res-client.component.scss']
})
export class HistoResClientComponent implements OnInit {

  info:any;
  service:any;

  constructor(
    public centreService: CentreUserService,
    private resService: ReservationService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {

    let id = this.route.snapshot.params.id;
    

    this.resService.OldReservationClient(id).subscribe(
      (result)=>{

        this.info = result;
        console.log(result);             

      },
      (error)=>{
        console.log(error);
      }
    );

    this.centreService.getAllServices().subscribe(
      (result)=>{
        this.service = result
        console.log(this.service);
        
      });
      

  }

  delete(reservation: any){ 

    let index = this.info.indexOf(reservation);
    this.info.splice(index, 1);

    this.resService.deleteRes(reservation.id_res).subscribe(
      res=>{
        
        this.toastr.show("réservation suprimée de votre historique");
        
      },
      err =>{
        console.log(err);
      }
    );
  }

}
