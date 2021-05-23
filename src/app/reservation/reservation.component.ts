import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Reservation } from '../models/Reservation.model';
import { CentreUserService } from '../services/CentreUser.service';
import { Router } from '@angular/router';
import { ReservationService } from '../services/Reservation.service';


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {


  service: any;
  addReservationForm: FormGroup;
  info: any;

  constructor(
    public userService: CentreUserService,
    private reservationService: ReservationService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router : Router
  ) {

    let formControls = {
      nbre_personnes_res: new FormControl('',[
        Validators.required,
        Validators.pattern("[1-9]+"),
        Validators.minLength(1)


      ]),
      dateRes: new FormControl('',[
        Validators.required
      ])
    }

    this.addReservationForm = this.fb.group(formControls)
  }

  get nbre_personnes_res() { return this.addReservationForm.get('nbre_personnes_res') }
  get dateRes() { return this.addReservationForm.get('dateRes'); }

  ngOnInit(): void {
  
    let id = this.route.snapshot.params.id;

    this.userService.getOneService(id).subscribe(
      (result)=>{
        
        this.service = result;
        
        this.userService.getOneUser(this.service.idCentre).subscribe(
          (result)=>{
            this.info=result                      
          }
        )
      },
      (error)=>{
        console.log(error);
      }
    );

  }

  onSubmit(){ 
    let data = this.addReservationForm.value;
    let idService = this.route.snapshot.params.id;
    let id = localStorage.getItem("myIdClient");

    let dets = new Reservation(
      data.dateRes,
      data.nbre_personnes_res 
      );

      
    this.reservationService.addReservation(idService,dets).subscribe(
      res=>{
        console.log(res);
        
        localStorage.setItem("idRes",res.id_res)

        
        
        this.toastr.success("Votre réservation a été faite avec success");
        this.router.navigate(['/CheckOut/'+id]);

      },
      err=>{
        this.toastr.success("Votre réservation a été faite avec success");
        this.router.navigate(['/CheckOut/'+id]);
        
      }
    );
    
    }

    minDate = new Date();
   
}
