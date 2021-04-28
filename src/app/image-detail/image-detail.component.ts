import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/Image.service';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.scss']
})
export class ImageDetailComponent implements OnInit {

  constructor(
    public crudApi: ImageService, 

  ) { }
   id = localStorage.getItem("idImg")


   
  ngOnInit(): void {
    localStorage.removeItem("idImg");

  /*  let id = localStorage.getItem("idImg");
    this.crudApi.getOnePhoto(id).subscribe(
      response =>{this.crudApi.listData = response;
        localStorage.removeItem("idImg");
      }
     );*/

  }

}
