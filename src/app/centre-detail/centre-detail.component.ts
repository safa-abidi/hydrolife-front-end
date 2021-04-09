import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { ImageService } from '../services/Image.service';

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

  constructor(private userService: CentreUserService,
    public crudApi: ImageService, 
    private route: ActivatedRoute,) { }

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


}
