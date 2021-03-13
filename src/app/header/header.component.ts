import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CentreUserService } from '../services/CentreUser.service';
import { Router } from '@angular/router';
import { CentreUser } from '../models/CentreUser.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loginForm: FormGroup
  closeResult = '';

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private userService:CentreUserService ,
    private router:Router
    ) {

    let formControls = {
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    }

    this.loginForm = this.fb.group(formControls)
  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }


  ngOnInit(): void {
    
    let isLoggedIn = this.userService.isLoggedIn();

    if (isLoggedIn) {
      this.router.navigate(['/LogInCentre']);
    } 
  }

  login() {
    let data = this.loginForm.value;

    let user = new CentreUser(0,'','',data.email,'',data.password,'');

    this.userService.loginAdmin(user).subscribe(
      (res: { token: any; })=>{
        console.log(res);
        let token = res.token;
        localStorage.setItem("myToken",token);
        this.router.navigate(['/LogInCentre']);
      },
      (err: any)=>{
        console.log(err);
        
      }
    );
    
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

