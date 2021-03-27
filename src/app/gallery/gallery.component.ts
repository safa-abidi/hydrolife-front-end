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

  dataForm!: FormBuilder;

  public message: string = "";
  userFile: any;

  constructor(public crudApi: ImageService ,public fb: FormBuilder,public toastr: ToastrService,
 
    
    ) { }

    get f() { return this.crudApi.dataForm.controls; }

    ResetForm() {
      this.crudApi.dataForm.reset();
  }
onSubmit() {
  
    this.addData();
    
}

infoForm() {
  this.crudApi.dataForm = this.fb.group({
    titre_photo: ['', [Validators.required]],
    description: ['', [Validators.required]]
    });
  }

  addData() {
    const formData = new  FormData();
    const article = this.crudApi.dataForm.value;
    
    formData.append('article',JSON.stringify(article));
    formData.append('file',this.userFile);
    this.crudApi.createData(formData).subscribe( data => {
      console.log("add data tab3ath");
      
    
     // this.router.navigate(['/articles']); 
    });
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

   
      
    }
  }
  ngOnInit(){
    
  }
}
 /* ngOnInit(): void {

  }*/

  //constructor(private httpClient: HttpClient) { }

  /*selectedFile!: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  imageName: any;

  //Gets called when the user selects an image
  public onFileChanged(event: any) {
    //Select File
    this.selectedFile = event.target.files[0];
  }


  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

  
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    let photo = new Image("ddddd","ddddd");
    uploadImageData.append('imageFile', this.selectedFile , this.selectedFile.name);
    this.updateServiceForm.append('', this.imageName);
    console.log(this.selectedFile.name);
    
  
    //Make a call to the Spring Boot Application to save the image
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
    this.httpClient.post('http://localhost:8080/api/photo/add', uploadImageData, {headers: header} )
      .subscribe(
        res => {
          console.log("succ");
          
        },
        err => {
          console.log(err);
          
        }
      
      );


  }

    //Gets called when the user clicks on retieve image button to get the image from back end
    getImage() {/*
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrieveResonse = res;
          this.base64Data = this.retrieveResonse.picByte;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }*/
