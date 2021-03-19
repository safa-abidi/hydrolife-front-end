import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CentreUserService } from '../services/CentreUser.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  info: any;
  

  constructor( private modalService: NgbModal,
    private fb: FormBuilder,
    private userService:CentreUserService ,
    private route: ActivatedRoute,
    private router:Router) { 
      let formControls = {
        Email: new FormControl('',[
          Validators.required,
          Validators.email
        ]),
        Password: new FormControl('',[
          Validators.required,
          Validators.minLength(6)
        ]),
        

      }
  
      this.loginForm = this.fb.group(formControls)
    }


  get Email() { return this.loginForm.get('Email') };
  get Password() { return this.loginForm.get('Password') };

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

      this.userService.getUserDet(data.Email).subscribe(
        (result)=>{
          console.log(result);
          
          this.info = result;
        },
        (error)=>{
          console.log(error);
        }
      )

    this.userService.loginAdmin(user).subscribe(
      (res: { jwt: any,
              email: any})=>{
                
        console.log(res);
        let token = res.jwt;
        let Email = res.email;
        
        localStorage.setItem("myToken",token);
        localStorage.setItem("myId",this.info.id)
        let id = localStorage.getItem("myId")
        
        this.router.navigate(['/DashBoard/'+id]);
      },
      (err: any)=>{
        console.log(err);
        
      }
    );
    
    
  
  }
  

  ngOnInit(): void {
    let id = localStorage.getItem("myId")
  }


  
  loggedin(){
    return localStorage.getItem("myToken");

  }

  logOut(){
    this.router.navigate(['']);
    return localStorage.removeItem("myToken");
    return localStorage.removeItem("myId");
    
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

