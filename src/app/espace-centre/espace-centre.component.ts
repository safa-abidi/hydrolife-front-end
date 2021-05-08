import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CentreUserService } from '../services/CentreUser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUser } from '../models/CentreUser.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-espace-centre',
  templateUrl: './espace-centre.component.html',
  styleUrls: ['./espace-centre.component.scss']
})
export class EspaceCentreComponent implements OnInit {
  loginForm: FormGroup
  closeResult = '';
  info: any;
  

  constructor(
     private modalService: NgbModal,
    private fb: FormBuilder,
    private userService:CentreUserService ,
    private route: ActivatedRoute,
    private router:Router,
    private toastr: ToastrService,
    public dialog: MatDialog) { 
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

    let client = new CentreUser(  
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

      this.userService.loginAdmin(client).subscribe(
        (res: { jwt: any,
                email: any})=>{
                  
          console.log(res);
          let token = res.jwt;
          let Email = res.email;
          
          localStorage.setItem("myToken",token);
          localStorage.setItem("myId",this.info.id)
          let id = localStorage.getItem("myId")
          this.loginForm.reset();
          this.router.navigate(['/CentreService/'+id]);
        },
        (err: any)=>{
          this.loginForm.reset();
          this.toastr.error("Mot de passe ou email erroné");
          console.log(err);
          
        }
      );
    
    
  
  }
  
  ngOnInit(): void {
    let id = localStorage.getItem("myId");
 
  }

  loginClient(){
    let id = localStorage.getItem("myId");

    this.userService.getOneUser(id).subscribe(
      (resultat: any) => {
        this.info = resultat;
        
      }
    )
  }

  
  loggedin(){
    return localStorage.getItem("myToken");
   
  }

   
  Clientloggedin(){
    return localStorage.getItem("myToken");
   
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
  header_var= false;


}
