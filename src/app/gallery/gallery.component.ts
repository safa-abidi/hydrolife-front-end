import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/Image.service'
import { Image } from '../models/Image.model'
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private httpClient: HttpClient) { }

  selectedFile!: File;
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
    uploadImageData.append('imageFile', this.selectedFile , this.selectedFile.name);
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
      );*/
  }

}


