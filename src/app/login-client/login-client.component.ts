import { Component, OnInit } from '@angular/core';
import { ClientUserService } from './../services/ClientUser.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientUser } from '../models/ClientUser.model';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.scss']
})
export class LoginClientComponent implements OnInit {

  logClientForm: FormGroup;
  info: any;

  constructor(
    private fb: FormBuilder,
    private userService:ClientUserService,
    private router : Router,
    private toastr: ToastrService
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

    this.logClientForm = this.fb.group(formControls)
  }
  get email() { return this.logClientForm.get('email') }
  get password() { return this.logClientForm.get('password') }

  ngOnInit(): void {

    let id = localStorage.getItem("myIdClient")
  }


  onSubmit() {
    
    let data = this.logClientForm.value;

    let client = new ClientUser(
      undefined,
      undefined,
      data.email,
      data.password,
      undefined,
      undefined,
      undefined

      );

      this.userService.getUserDet(data.email).subscribe(
        (result)=>{
          
          this.info = result;
        },
        (error)=>{
          console.log(error);
        }
      )

    this.userService.loginAdmin(client).subscribe(
      (res: { jwt: any,
              email: any})=>{
                
        console.log(res);
        let token = res.jwt;
        let Email = res.email;
        
        localStorage.setItem("myTokenClient",token);
        localStorage.setItem("myIdClient",this.info.id)
        let id = localStorage.getItem("myIdClient")
        this.logClientForm.reset();
        this.router.navigate(['/LesCentres/'+id]);
      },
      (err: any)=>{
        this.logClientForm.reset();
        this.toastr.error("Mot de passe ou email erroné");
        console.log(err);
        
      }
    );
  
  }

}
