import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CentreUserService } from '../services/CentreUser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-centre-prof',
  templateUrl: './centre-prof.component.html',
  styleUrls: ['./centre-prof.component.scss']
})
export class CentreProfComponent implements OnInit {

  info: any;
  

  constructor(private http: HttpClient,
              private userService: CentreUserService,
              private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    let idUser = localStorage.getItem("myId")
     
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
