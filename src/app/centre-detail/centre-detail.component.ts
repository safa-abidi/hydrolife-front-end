import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { ImageService } from '../services/Image.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private userService: CentreUserService,
    public crudApi: ImageService, 
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;

    this.userService.getOneUser(id).subscribe(
      (result)=>{
        
        this.info = result;
        console.log(this.info);
        
      },
      (error)=>{
        console.log(error);
      }
    );

    
    this.userService.getAllServicesOfCenter(id).subscribe(
      (result)=>{
        
        this.services = result;
        console.log(this.services);
        
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
        console.log(response);
        
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

}
