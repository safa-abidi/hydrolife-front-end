import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CentreUser } from '../models/CentreUser.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user!: CentreUser[];

  constructor(private http: HttpClient

  ) { }

  ngOnInit(): void {
     
   
  }

}
