import { Component, OnInit } from '@angular/core';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CentreUserService } from '../services/CentreUser.service';
import { Router } from '@angular/router';
import { CentreUser } from '../models/CentreUser.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in-centre',
  templateUrl: './log-in-centre.component.html',
  styleUrls: ['./log-in-centre.component.scss']
})
export class LogInCentreComponent implements OnInit {

  loginForm: FormGroup;


  constructor( private modalService: NgbModal,
    private fb: FormBuilder,
    private userService:CentreUserService ,
    private router:Router) { 
      let formControls = {
        Email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        Password: new FormControl('',[
          Validators.required,
          Validators.minLength(6)
        ])
      }
  
      this.loginForm = this.fb.group(formControls)
    }

    


  ngOnInit(): void {

  }

  

}
