import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientUserService } from '../services/ClientUser.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-profil',
  templateUrl: './client-profil.component.html',
  styleUrls: ['./client-profil.component.scss']
})
export class ClientProfilComponent implements OnInit {

  info: any;
  

  constructor(private http: HttpClient,
              private userService: ClientUserService,
              private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
  //  let idUser = this.route.snapshot.params.id;
    let idUser = localStorage.getItem("myIdClient");
     
    this.userService.getOneClient(idUser).subscribe(
      (result)=>{
        
        this.info = result;
        
      },
      (error)=>{
        console.log(error);
      }
    )
  }

}
