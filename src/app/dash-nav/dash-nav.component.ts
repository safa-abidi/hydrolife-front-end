import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentreUserService } from '../services/CentreUser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreProfComponent } from '../centre-prof/centre-prof.component';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-dash-nav',
  templateUrl: './dash-nav.component.html',
  styleUrls: ['./dash-nav.component.scss']
})
export class DashNavComponent implements OnInit {

  info: any;

  constructor(private http: HttpClient,
              private userService: CentreUserService,
              private route: ActivatedRoute,
              public dialog: MatDialog) {  }


  public isActive:boolean = true;

  ngOnInit(): void {
    let idUser = localStorage.getItem("myId");
     
    this.userService.getOneUser(idUser).subscribe(
      (result)=>{
        this.info = result;
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  openDialog() {
    this.dialog.open(CentreProfComponent);
  }
}
