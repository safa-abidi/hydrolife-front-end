import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ReservationService } from '../services/Reservation.service';
import { ReservationUpdate } from '../models/ReservationUpdate.model';

@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})
export class UpdateReservationComponent implements OnInit {

  Reservation: any;
  UpdateReservationForm: FormGroup;
  info: any;

  constructor(
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router : Router
  ) {

    let formControls = {
      nbre_personnes_res: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-5]+"),
        Validators.minLength(1),
        Validators.maxLength(1)

      ]),
      date_res: new FormControl('',[
        Validators.required
      ])
    }

    this.UpdateReservationForm = this.fb.group(formControls)
  }

  get date_res() { return this.UpdateReservationForm.get('date_res'); }
  get nbre_personnes_res() { return this.UpdateReservationForm.get('nbre_personnes_res') }


  ngOnInit(): void {

    

    let idRes = this.route.snapshot.params.id_res;
    
    
    this.reservationService.getOneRes(idRes).subscribe(
      (res: any)=>{
        let Reserva = res;
   
        this.UpdateReservationForm.patchValue({
          nbre_personnes_res: Reserva.nbre_personnes_res,
          date_res: Reserva.date_res
        });
        
      },
      (err: any)=>{
        console.log(err);
      }
    )

  }

  updateReservation() {

    

    
    let data = this.UpdateReservationForm.value;
    let idRes = this.route.snapshot.params.id_res;
    this.reservationService.getOneRes(idRes).subscribe(
      (res: any)=>{
        let Reserva = res; 
    let Reservation = new ReservationUpdate(
      idRes,
      data.date_res,
      data.nbre_personnes_res,
      Reserva.idCentre,
      Reserva.idService,
      Reserva.nomClient,
      Reserva.nomService,
      Reserva.prenomClient

    )
    this.reservationService.updateReservation(Reservation).subscribe(
      res=>{
        console.log(res);
        
        this.toastr.success("Reservation mit à jour avec succès ");

    //   this.router.navigate(['/MyReservation/'+localStorage.getItem("myIdClient")]);

      },
      err=>{
        console.log(err);
      }
    );
  })

    }
    minDate = new Date();

  }
