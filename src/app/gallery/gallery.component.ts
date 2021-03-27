import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/Image.service'
import { Image } from '../models/Image.model'
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Validators } from '@angular/forms';


;
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, FormControl, ReactiveFormsModule }from '@angular/forms';

import { HttpResponse } from '@angular/common/http';
import {MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  //dataForm!: FormBuilder;
  addPhoto: FormGroup

  public message: string = "";
  userFile: any;

  constructor(public crudApi: ImageService ,public fb: FormBuilder,public toastr: ToastrService,
 
    
    ) {let formControls = {
      titre_photo: new FormControl('',[
        Validators.required
      ]),
      description: new FormControl('',[
        Validators.required
      ])


     }
     this.addPhoto = this.fb.group(formControls)
    }

    //get f() { return this.crudApi.dataForm.controls; }

    ResetForm() {
      this.crudApi.dataForm.reset();
  }
onSubmit() {
  
    this.addData();
    
}

  addData() {
    const formData = new  FormData();
    const photo = this.addPhoto.value;
    console.log(photo);
    
    
    formData.append('photo',JSON.stringify(photo));
    formData.append('file',this.documentFile);
    this.crudApi.createData(formData).subscribe( data => {
      

    });
  }
  public documentFile: any= File;

  onSelectFile(event: any) {

    const file=event.target.files[0];
  this.documentFile=file;
  }
  ngOnInit(){
    
  }
}