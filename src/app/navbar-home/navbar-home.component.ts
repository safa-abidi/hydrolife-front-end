import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CentreUserService } from '../services/CentreUser.service';
import { ClientUserService } from '../services/ClientUser.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUser } from '../models/CentreUser.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ClientProfilComponent } from '../client-profil/client-profil.component';
import {MatDialog} from '@angular/material/dialog';

import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss']
})
export class NavbarHomeComponent {

  loginForm: FormGroup
  closeResult = '';
  info: any;
  

  constructor(private breakpointObserver: BreakpointObserver,
     private modalService: NgbModal,
    private fb: FormBuilder,
    private userService:CentreUserService ,
    private ClientService: ClientUserService,
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

    let user = new CentreUser(  
      undefined,
      undefined,
      undefined,
      data.Email,
      data.Password,
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
        
        this.router.navigate(['/CentreProfil/'+id]);
      },
      (err: any)=>{
        this.toastr.error("Mot de passe ou email erroné");
        console.log(err);
        
      }
    );
    
    
  
  }
  
  ngOnInit(): void {
    let id = localStorage.getItem("myId");
    this.info = this.loginClient()
 
  }

  loginClient(){
    let idClient = localStorage.getItem("myIdClient");

    this.ClientService.getOneClient(idClient).subscribe(
      (resultat: any) => {
        this.info = resultat;
        
      }
    )
  }

  
  loggedin(){
    return localStorage.getItem("myToken");
   
  }

   
  Clientloggedin(){
    return localStorage.getItem("myTokenClient");
   
  }

  logOut(){
    this.toastr.success("Déconnexion réussite à bientôt");
    this.router.navigate(['/Home']);
    return localStorage.removeItem("myToken"),
    localStorage.removeItem("myId");
  }

  logOutClient(){
    this.toastr.success("Déconnexion réussite à bientôt");
    this.router.navigate(['/Home']);
    return localStorage.removeItem("myTokenClient"),
    localStorage.removeItem("myIdClient");
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

  @HostListener("document:scroll")scrollfunction(){
    if(document.documentElement.scrollTop > 0){

      this.header_var=true;
     }else {
       this.header_var=false;

     }
  }

  latitude = 51.678418;
  longitude = 7.809007;
  locationChosen = false;

  onChoseLocation(event: any) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    openDialog() {
      this.dialog.open(ClientProfilComponent);
    }


}
