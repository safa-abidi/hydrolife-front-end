import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ReservationService } from '../services/Reservation.service';
import { CentreUserService } from '../services/CentreUser.service';
import {ChangeDetectionStrategy,ViewChild,TemplateRef,} from '@angular/core';
import {isSameDay,isSameMonth,} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent,CalendarEventAction,CalendarView,CalendarEventTimesChangedEvent,} from 'angular-calendar';

@Component({
  selector: 'app-my-reservation',
  templateUrl: './my-reservation.component.html',
  styleUrls: ['./my-reservation.component.scss'],
  providers: [DatePipe]
})
export class MyReservationComponent implements OnInit {

   colors: any = {
    red: {
      primary: '#1f5473',
    }
  };

  info:any;
  err:any;
  today:any;
  currentdate:any;
  service:any;
  events:any;
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
        
      })

    let id = this.route.snapshot.params.id;
    

    this.resService.OldReservationClient(id).subscribe(
      (result)=>{
        
        this.info = result;

      },
      (error)=>{
        console.log(error);
      }
    )
    this.loadevents();

  }

  loadevents(){
    this.resService.getAllResOfClient(this.id).subscribe(Res =>{
      this.events = []; 
      
      for(let reservation of Res){
        let event = {
          id: reservation.id_res,
          start: new Date(reservation.dateRes),
          title: reservation.nomService ,
          end: reservation.montant,
          color: this.colors.red ,
          resizable: {
            beforeStart: false,
            afterEnd: false,
          },
          draggable: false,
         
        };
        
        
        
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
