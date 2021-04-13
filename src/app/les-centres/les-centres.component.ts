
import { Component, OnInit } from '@angular/core';
import { CentreUserService } from '../services/CentreUser.service';
import { ImageService } from '../services/Image.service';

@Component({
  selector: 'app-les-centres',
  templateUrl: './les-centres.component.html',
  styleUrls: ['./les-centres.component.scss']
})
export class LesCentresComponent implements OnInit {

  info: any;

  constructor(
    private userService: CentreUserService,
    private userImage: ImageService

) {}

  ngOnInit(): void {

    
    this.userService.getAllCentres().subscribe(
      (result)=>{
        
        this.info = result;
        console.log(result);
        
      },
      (error)=>{
        console.log(error);
      }
    );


  }

}
