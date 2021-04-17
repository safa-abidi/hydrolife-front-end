import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientUserService } from '../services/ClientUser.service';
import { ClientUserUpdate } from '../models/ClientUserUpdate.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-client-profil',
  templateUrl: './update-client-profil.component.html',
  styleUrls: ['./update-client-profil.component.scss']
})
export class UpdateClientProfilComponent implements OnInit {



  updateClientForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
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
        Validators.required,
        Validators.pattern("[0-9.'-]+")
      ]),
    }

    this.updateClientForm = this.fb.group(formControls)
  }
  get nom() { return this.updateClientForm.get('nom') }
  get adresse() { return this.updateClientForm.get('adresse') }
  get email() { return this.updateClientForm.get('email') }
  get password() { return this.updateClientForm.get('password') }
  get tel() { return this.updateClientForm.get('tel') }
  get prenom() { return this.updateClientForm.get('prenom') }
  get dateNaissance() { return this.updateClientForm.get('dateNaissance') }




  

  ngOnInit(): void {
    let idUser = this.route.snapshot.params.id;
    
    
    this.userService.getOneClient(idUser).subscribe(
      (res: any)=>{
        let ClientUserUpdate = res;

          this.updateClientForm.patchValue({
          nom : ClientUserUpdate.nom,
          adresse: ClientUserUpdate.adresse,
          email: ClientUserUpdate.email,
          tel: ClientUserUpdate.tel,
          prenom: ClientUserUpdate.prenom,
          dateNaissance: ClientUserUpdate.dateNaissance,
        })
        
      },
      (err: any)=>{
        console.log(err);
      }
    )
  }
  updateUser() {
    let data = this.updateClientForm.value;
    let idUser = this.route.snapshot.params.id;
    let user = new ClientUserUpdate(
      idUser,
      data.nom,
      data.adresse,
      data.email,
      data.password,
      data.prenom,
      data.tel,
      data.dateNaissance
      );
    

    this.userService.updateClient(user).subscribe(
      res=>{
        
        this.toastr.success("Profil mit à jour");

        this.router.navigate(['/Home/'+idUser]);
      },
      err=>{
        console.log(err);
      }
    );

  }
}
