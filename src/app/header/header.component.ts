import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CentreUserService } from '../services/CentreUser.service';
import { Router } from '@angular/router';
import { CentreUser } from '../models/CentreUser.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { JwtModule } from "@auth0/angular-jwt";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginForm: FormGroup
  closeResult = '';

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
        let token = data.jwt;

        localStorage.setItem("myToken",token);
        this.router.navigate(['/CentreProfil/:id']);
      },
      (err: any)=>{
        console.log(err);
        
      }
    );
  
  }
  
  loggedin(){
    return localStorage.getItem("myToken");
  }

  logOut(){
    this.router.navigate(['/EspaceCentre']);
    return localStorage.removeItem("myToken");
    
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

