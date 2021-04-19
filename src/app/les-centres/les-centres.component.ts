

import { Component, OnInit } from '@angular/core';
import { CentreUserService } from '../services/CentreUser.service';
import { ImageService } from '../services/Image.service';
import { SecuDialogComponent } from '../secu-dialog/secu-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-les-centres',
  templateUrl: './les-centres.component.html',
  styleUrls: ['./les-centres.component.scss']
})
export class LesCentresComponent implements OnInit {

  openDialog() {
    this.dialog.open(SecuDialogComponent);
  }



  info: any;
  pics: any;
  constructor(
    private userService: CentreUserService,
    public crudApi: ImageService,
    public dialog: MatDialog

) {}

  ngOnInit(): void {
    
    this.userService.getAllCentres().subscribe(
      (result)=>{
        
        this.info = result;
       for(let n:number = 0; n<this.info?.length; n++){ 
      
        this.crudApi.getByCentreIdBiss(this.info?.[n].id).subscribe(
          (result)=>{
            
            this.crudApi.listData = result; 
            
          },
          (error)=>{
            console.log(error);
          }
        )
      }
    },
      (error)=>{
        console.log(error);
      }
    );
  } 
}

