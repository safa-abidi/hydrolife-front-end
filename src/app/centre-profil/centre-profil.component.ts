import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentreUserService } from '../services/CentreUser.service';
import { CentreUser } from '../models/CentreUser.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-centre-profil',
  templateUrl: './centre-profil.component.html',
  styleUrls: ['./centre-profil.component.scss']
})
export class CentreProfilComponent implements OnInit {

  info: any;

  constructor(private http: HttpClient,
              private userService: CentreUserService,
              private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    let idUser = this.route.snapshot.params.id;
     
    this.userService.getOneUser(idUser).subscribe(
      (result)=>{
        console.log(result);
        
        this.info = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
