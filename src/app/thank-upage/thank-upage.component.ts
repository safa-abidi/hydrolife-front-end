import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientUserService } from '../services/ClientUser.service';

@Component({
  selector: 'app-thank-upage',
  templateUrl: './thank-upage.component.html',
  styleUrls: ['./thank-upage.component.scss']
})
export class ThankUPageComponent implements OnInit {

  info:any;

  constructor(
    public userService: ClientUserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {



    let id = this.route.snapshot.params.id;

    this.userService.getOneClient(id).subscribe(
      (result)=>{ 
        this.info = result;

      }
    );  
  }
}
