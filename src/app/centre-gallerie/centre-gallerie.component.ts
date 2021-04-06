import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/Image.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Image } from '../models/Image.model';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-centre-gallerie',
  templateUrl: './centre-gallerie.component.html',
  styleUrls: ['./centre-gallerie.component.scss']
})
export class CentreGallerieComponent implements OnInit {

  control: FormControl = new FormControl('');

  constructor(
    public crudApi: ImageService, 
    public toastr: ToastrService,
    private router : Router,
    public fb: FormBuilder) { }
 
  ngOnInit() {
    
    this.getData();
 }

  id: any;
  idCentre: any;
 
  getData() {
    
    this.idCentre = localStorage.getItem("myId");
    this.crudApi.getByCentreId(this.idCentre).subscribe(
      response =>{this.crudApi.listData = response;
      }
     );
   
  } 

  removeData(id: number) {
   
    this.crudApi.deleteData(id)
      .subscribe(
        data => {
          this.toastr.warning(' Photo suprimée '); 
          this.getData();
        },
        error => console.log(error));
  }

  
  }


