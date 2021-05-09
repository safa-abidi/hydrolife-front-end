import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/Image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  info:any;

  constructor(
    public crudApi: ImageService, 

  ) { }
   id = localStorage.getItem("idImg")


   
  ngOnInit(): void {

    let id = localStorage.getItem("idImg")

    this.crudApi.getOnePhotoDets(id).subscribe(
      (result)=>{
        
        this.info = result;
        localStorage.removeItem("idImg");
        console.log(result);
        
        
      },
      (error)=>{
        console.log(error);
      }
    );

  }

}
