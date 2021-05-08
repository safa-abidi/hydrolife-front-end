import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ReservationService } from '../services/Reservation.service';
import { ReservationDetailComponent } from '../reservation-detail/reservation-detail.component';
import {ChangeDetectionStrategy,ViewChild,TemplateRef,} from '@angular/core';
import {isSameDay,isSameMonth,} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,CalendarEventAction,CalendarView,CalendarEventTimesChangedEvent,} from 'angular-calendar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientUserService } from '../services/ClientUser.service';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);


@Component({
  selector: 'app-centre-reservation',
  templateUrl: './centre-reservation.component.html',
  styleUrls: ['./centre-reservation.component.scss']
})
export class CentreReservationComponent implements OnInit {

  colors: any = {
    red: {
      primary: '#1f5473',
    }
  };

  info:any;
  infoClient:any;
  infoService:any;
  events:any;
  err:any;
  id = this.route.snapshot.params.id;


  constructor(
    private userService: ClientUserService,
    private resService: ReservationService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private modal: NgbModal,
    private router : Router,

  ) { }

  ngOnInit(): void {

    let id = localStorage.getItem("myId");

    this.resService.OldReservation(id).subscribe(
      (result)=>{
        this.info = result;
        console.log(this.info);
        
      },
      (error)=>{
        console.log(error);
      }
    )

    this.loadevents();

  }

  delete(modalData: any){ 

    let index = this.info.indexOf(modalData);
    this.info.splice(index, 1); 

    this.resService.deleteRes(modalData.idRes).subscribe(
      res=>{
        
        this.toastr.show("réservation suprimée")    
        window.location.reload();
      },
      err =>{
        console.log(err);
      }
    );
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

  loadevents(){
    this.resService.getAllResOfCentre(this.id).subscribe(Res =>{
      this.events = [];
      
      for(let reservation of Res){
        let event = { 
          id: reservation.idClient,
          idRes: reservation.id_res,
          start: new Date(reservation.dateRes),
          title: reservation.nomClient + ' ' + reservation.prenomClient + ' / ' +  reservation.nomService,
          end: reservation.montant,
          actions: reservation.nomService,
          color: this.colors.red ,
          resizable: {
            beforeStart: false,
            afterEnd: false,
          },
          draggable: false,
         
        };
        
        this.userService.getOneClient(event?.id).subscribe(
          (result)=>{
            
            this.infoClient = result;},
            err => console.log(err)
            ) 
        
        this.events.push(event);
      }
    },
    err => this.err = <any>err
    );
  }
  
    @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;
  
    view: CalendarView = CalendarView.Month;
  
    CalendarView = CalendarView;
  
    viewDate: Date = new Date();
  
    modalData!: {
      action: string;
      event: CalendarEvent;
    };
  
    actions: CalendarEventAction[] = [
      {
        label: '<i class="fas fa-fw fa-pencil-alt"></i>',
        a11yLabel: 'Edit',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.handleEvent('Edited', event);
        },
      },
  
    ];
  
    refresh: Subject<any> = new Subject();
  
    activeDayIsOpen: boolean = true;
  
    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
      if (isSameMonth(date, this.viewDate)) {
        if (
          (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
          events.length === 0
        ) {
          this.activeDayIsOpen = false;
        } else {
          this.activeDayIsOpen = true;
        }
        this.viewDate = date;
      }
    }

  
    handleEvent(action: string, event: CalendarEvent): void {
      this.modalData = { event, action };
      this.modal.open(this.modalContent, { size: 'lg' });
    }
  
    setView(view: CalendarView) {
      this.view = view;
    }
  
    closeOpenMonthViewDay() {
      this.activeDayIsOpen = false;
    }

}