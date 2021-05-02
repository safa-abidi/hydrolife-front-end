import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentreUserService } from '../services/CentreUser.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-centre-service',
  templateUrl: './centre-service.component.html',
  styleUrls: ['./centre-service.component.scss']
})
export class CentreServiceComponent implements OnInit {

  info: any;
  id: any;

  constructor(private http: HttpClient,
              public userService: CentreUserService,
              private route: ActivatedRoute,
              private toastr: ToastrService

  ) {
   this.id = localStorage.getItem("myId");
   }
  ngOnInit(): void {

    let idUser = this.route.snapshot.params.id;
    
    this.userService.getAllServicesOfCenter(this.id).subscribe(
      (result)=>{
        
        this.userService.listData = result;
        console.log(result);
        
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  

  delete(service: any){ 

    let index = this.info.indexOf(service);
    this.info.splice(index, 1);
    console.log(index);
    

    this.userService.deleteService(service.id_service).subscribe(
      res=>{
        
        this.toastr.show("Service supprimé");
        
      },
      err =>{
        console.log(err);
      }
    );
  }

  

}
