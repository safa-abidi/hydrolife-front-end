import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ReservationService } from '../services/Reservation.service';
import { CentreUserService } from '../services/CentreUser.service';
import {
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';

@Component({
  selector: 'app-my-reservation',
  templateUrl: './my-reservation.component.html',
  styleUrls: ['./my-reservation.component.scss'],
  providers: [DatePipe]
})
export class MyReservationComponent implements OnInit {

   colors: any = {
    red: {
      primary: '#ad2121',
      secondary: '#FAE3E3',
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF',
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA',
    },
  };

  info:any;
  today:any;
  currentdate:any;
  service:any;
  id = this.route.snapshot.params.id;

  constructor(
    public centreService: CentreUserService,
    private resService: ReservationService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private date: DatePipe,
    private modal: NgbModal

  ) { }

  

  ngOnInit(): void {


    this.centreService.getAllServices().subscribe(
      (result)=>{
        this.service = result
        console.log(this.service);
        
      })

  //  let   today:any;
   // console.log(this.info?.date_debut_res < today);
   // this.isExpirationExpired(this.res);
//console.log(this.info?.date_debut_res);
//console.log(today);

    let id = this.route.snapshot.params.id;
    

    this.resService.UpCommingReservationClient(id).subscribe(
      (result)=>{
        let   today= this.date.transform(new Date());
       // console.log(today);
        
        
        this.info = result;
        console.log(result);          

         /* console.log(this.info?.[n].date_res.toLocaleString());
         if ( theDate! < today!)
         { console.log("jdid")}
         else   { console.log("historique") }
          ;*/
          
  
          
          
         

      },
      (error)=>{
        console.log(error);
      }
    )

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
      {
        label: '<i class="fas fa-fw fa-trash-alt"></i>',
        a11yLabel: 'Delete',
        onClick: ({ event }: { event: CalendarEvent }): void => {
          this.events = this.events.filter((iEvent) => iEvent !== event);
          this.handleEvent('Deleted', event);
        },
      },
    ];
  
    refresh: Subject<any> = new Subject();
  
    events: CalendarEvent[] = [
      {
        start: subDays(startOfDay(new Date()), 1),
        end: addDays(new Date(), 1),
        title: 'A 3 day event',
        color: this.colors.red,
        actions: this.actions,
        allDay: true,
        resizable: {
          beforeStart: true,
          afterEnd: true,
        },
        draggable: true,
      },
     
    ];
  
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
  
    eventTimesChanged({
      event,
      newStart,
      newEnd,
    }: CalendarEventTimesChangedEvent): void {
      this.events = this.events.map((iEvent) => {
        if (iEvent === event) {
          return {
            ...event,
            start: newStart,
            end: newEnd,
          };
        }
        return iEvent;
      });
      this.handleEvent('Dropped or resized', event);
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
  



/*
Safèè sent Yesterday at 12:34 AM
heya teb3a khatr adheka aleh nahkillk aleha , teb3a l affichage , 
heya kelmt historique todhher s3iba ema heya juste t9aren date reserva par rapport 
date lyoum keni asgher ray historique ken akber ray a venir*/