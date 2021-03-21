import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentreUserService } from '../services/CentreUser.service';
import { CentreUser } from '../models/CentreUser.model';
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
              private userService: CentreUserService,
              private route: ActivatedRoute

  ) {
   this.id = localStorage.getItem("myId");
   }
  ngOnInit(): void {
    let idUser = this.route.snapshot.params.id;
    
     
    this.userService.getAllServices().subscribe(
      (result)=>{
        
        this.info = result;
        console.log(this.info)
      },
      (error)=>{
        console.log(error);
      }
    )


  }

}
