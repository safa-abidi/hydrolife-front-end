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
  isLoginFailed = false;
  errorMes = '';


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

    get Email() { return this.loginForm.get('Email') };
  get Password() { return this.loginForm.get('Password') };


  ngOnInit(): void {

    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/CentreProfil/:id']);
    } 
  }

  login() {
    let data = this.loginForm.value;

    let user = new CentreUser(  
      undefined,
      undefined,
      undefined,
      data.Email,
      data.Password,
      undefined,
      undefined
      );

    this.userService.loginAdmin(user).subscribe(
      (res: { token: any; })=>{
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken",token);
        this.router.navigate(['/CentreProfil/:id']);
      },
      (err: any)=>{
        console.log(err);
        
      }
    );
  
  }

}
