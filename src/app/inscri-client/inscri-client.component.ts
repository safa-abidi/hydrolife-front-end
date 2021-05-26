import { Component, OnInit } from '@angular/core';
import { ClientUserService } from './../services/ClientUser.service';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ClientUser } from '../models/ClientUser.model';

@Component({
  selector: 'app-inscri-client',
  templateUrl: './inscri-client.component.html',
  styleUrls: ['./inscri-client.component.scss']
})
export class InscriClientComponent implements OnInit {

 addClientForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private userService:ClientUserService,
    private router : Router,
    private toastr: ToastrService
  ) {

    let formControls = {
      nom: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      prenom: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      adresse: new FormControl('',[
        Validators.required
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      tel: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+"),
        Validators.minLength(8),
        Validators.maxLength(13)
      ]),
      dateNaissance: new FormControl('',[
        Validators.required
      ])
    }

    this.addClientForm = this.fb.group(formControls)
  }
  get nom() { return this.addClientForm.get('nom') }
  get adresse() { return this.addClientForm.get('adresse') }
  get email() { return this.addClientForm.get('email') }
  get password() { return this.addClientForm.get('password') }
  get tel() { return this.addClientForm.get('tel') }
  get prenom() { return this.addClientForm.get('prenom') }
  get dateNaissance() { return this.addClientForm.get('dateNaissance'); }




  
  ngOnInit(): void {
  }


  onSubmit(){

    let data = this.addClientForm.value;
    
    let client = new ClientUser(
      data.nom,
      data.adresse,
      data.email,
      data.password,
      data.prenom,
      data.tel,
      data.dateNaissance

      );
      
    this.userService.addUser(client).subscribe(
      res=>{
        
        this.toastr.success("Vos êtes inscrits avec succès");
        this.router.navigate(['/Home']);

      },
      err=>{
        this.toastr.error("Compte déja existant");
        console.log(err);
        
      }
    );
    
  }

  maxDate = new Date();

}
