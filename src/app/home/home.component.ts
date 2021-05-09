import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SecuDialogComponent } from '../secu-dialog/secu-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {CentreUserService} from '../services/CentreUser.service';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  @ViewChild('ngcarousel', { static: true }) ngCarousel!: NgbCarousel;



  navigateToSlide(item: any) {
    this.ngCarousel.select(item);
    console.log(item)
  }

  getToPrev() {
    this.ngCarousel.prev();
  }

  goToNext() {
    this.ngCarousel.next();
  }


  stopCarousel() {
    this.ngCarousel.pause();
  }

  restartCarousel() {
    this.ngCarousel.cycle();
  }

  closeResult = '';
  info: any;
  idSer:any;

  constructor( private modalService: NgbModal,
    public dialog: MatDialog,
    private userService: CentreUserService) { }

    
  ngOnInit(): void {

;

    this.userService.getAllPromotion().subscribe(
      (result)=>{
        
        this.info = result;
        console.log(this.info);

        for (let i = 0; i < 2; i++) {

        this.idSer = this.info[i].services[0].id_service

        }
            
      },
      (error)=>{
        console.log(error);
      }
    )
    
    let id = localStorage.getItem("myId")
  }


  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  header_var= false;

  @HostListener("document:scroll")scrollfunction(){
    if(document.documentElement.scrollTop > 0){

      this.header_var=true;
     }else {
       this.header_var=false;

     }
  }

  latitude = 51.678418;
  longitude = 7.809007;
  locationChosen = false;

  onChoseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  
  openDialog() {
    this.dialog.open(SecuDialogComponent);
  }

}
