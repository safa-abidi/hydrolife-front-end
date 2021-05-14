import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CentreUserService } from '../services/CentreUser.service';
import { ReservationService } from '../services/Reservation.service';
import { SearchService } from '../services/Search.service';
import { ReservationDetailComponent } from '../reservation-detail/reservation-detail.component';


@Component({
  selector: 'app-search-histo',
  templateUrl: './search-histo.component.html',
  styleUrls: ['./search-histo.component.scss']
})
export class SearchHistoComponent implements OnInit {

  SearchClientForm: FormGroup;

  LeMot:any;
  LeMot2:any;
  info:any;
  div1:any = true;


  constructor(
    public userService: CentreUserService,
    private Search: SearchService,
    private fb: FormBuilder,
    private resService: ReservationService,
    private toastr: ToastrService,
    public dialog: MatDialog,

  ) { 
    let formControls = {
      mot: new FormControl('',[
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      mot2: new FormControl('',[
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ])
  } 
  this.SearchClientForm = this.fb.group(formControls)

}

get mot() { return this.SearchClientForm.get('mot') }
get mot2() { return this.SearchClientForm.get('mot2') }


  ngOnInit(): void {
  }

  onSubmit(){

    this.LeMot = this.SearchClientForm.get('mot');
    this.LeMot2 = this.SearchClientForm.get('mot2');
    

    this.Search.SearchClientHisto(this.LeMot.value,this.LeMot2.value).subscribe(
      (result)=>{
        
        this.info = result;
        this.div1=false;
        this.SearchClientForm.reset();
        console.log(result);
      } 
    )

  }
  deleteHisto(reservation: any){ 

    let index = this.info.indexOf(reservation);
    this.info.splice(index, 1);

    this.resService.deleteRes(reservation.id_res).subscribe(
      res=>{
        
        this.toastr.warning("réservation suprimée de votre historique");
        
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

