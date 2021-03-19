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

  constructor(private http: HttpClient,
              private userService: CentreUserService,
              private route: ActivatedRoute

  ) { }
  ngOnInit(): void {
    let idUser = this.route.snapshot.params.id;
     
    this.userService.getOneUser(idUser).subscribe(
      (result)=>{
        
        this.info = result;
      },
      (error)=>{
        console.log(error);
      }
    )


  }

}
