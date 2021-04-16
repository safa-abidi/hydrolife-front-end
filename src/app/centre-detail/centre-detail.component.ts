import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { ImageService } from '../services/Image.service';
import {MatDialog} from '@angular/material/dialog';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { SecuDialogComponent } from '../secu-dialog/secu-dialog.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-centre-detail',
  templateUrl: './centre-detail.component.html',
  styleUrls: ['./centre-detail.component.scss']
})
export class CentreDetailComponent implements OnInit {

  info: any;
  services: any;
  public list:any = [];
  closeResult = '';
  idClient:any;

  constructor(private userService: CentreUserService,
    public crudApi: ImageService, 
    private route: ActivatedRoute,
    private modalService: NgbModal,
    public dialog: MatDialog) { }

    openDialog() {
      this.dialog.open(SecuDialogComponent);
    }

    Clientloggedin(){
      return localStorage.getItem("myTokenClient");
     
    }

  ngOnInit(): void {
    this.idClient = localStorage.getItem("myIdClient");
    
    
    let id = this.route.snapshot.params.id;

    this.userService.getOneUser(id).subscribe(
      (result)=>{
        
        this.info = result;
        
      },
      (error)=>{
        console.log(error);
      }
    );

    
    this.userService.getAllServicesOfCenter(id).subscribe(
      (result)=>{
        
        this.services = result;

      },
      (error)=>{
        console.log(error);
      }
    );

    this.getData();

  }

  getData() {    
    let id = this.route.snapshot.params.id;
    
    this.crudApi.getByCentreIdBis(id).subscribe(
      response =>{this.crudApi.listData = response;
        
      }
     );
   
  }

  latitude = 51.678418;
  longitude = 7.809007;
  locationChosen = false;

  onChoseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

   

}
