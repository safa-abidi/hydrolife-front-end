import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImageService } from '../services/Image.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



import { Image } from '../models/Image.model'


import { Observable } from "rxjs";

import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-centre-gallerie',
  templateUrl: './centre-gallerie.component.html',
  styleUrls: ['./centre-gallerie.component.scss']
})
export class CentreGallerieComponent implements OnInit {





  control: FormControl = new FormControl('');
  constructor(public crudApi: ImageService, public toastr: ToastrService,
    private router : Router,public fb: FormBuilder) { }
 
  ngOnInit() {
    
    this.getData();
  
    
  }

  

  
  getData() {
    this.crudApi.getAll().subscribe(
      response =>{this.crudApi.listData = response;
      console.log(response);
      }
     );
   
  }
  
 
  removeData(id: number) {
    if (window.confirm('Are sure you want to delete this Article ?')) {
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          console.log(data);
          this.toastr.warning(' data successfully deleted!'); 
          this.getData();
        },
        error => console.log(error));
  }
  }
  selectData(item : Image) {
    this.crudApi.dataForm = this.fb.group(Object.assign({},item));
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width="50%";
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  /*

  constructor(private http: HttpClient,
    private ImageService: ImageService,
    private route: ActivatedRoute,
    private toastr: ToastrService) {

      this.id = localStorage.getItem("myId");
     }

    info: any;
    id: any;

    getData() {
      this.ImageService.getAll().subscribe(
        response =>{this.ImageService.listData = response;}
       );
     
    }

  ngOnInit(): void {


    this.getData();

    let idUser = this.route.snapshot.params.id;
    
     
    this.ImageService.getAll().subscribe(
      (result)=>{
        
        this.info = result;
        console.log(result);
        
      },
      (error)=>{
        console.log(error);
      }
    )

  }*/

}
