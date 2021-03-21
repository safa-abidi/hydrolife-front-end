import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { CentreUser } from '../models/CentreUser.model';

@Component({
  selector: 'app-update-centre-profil',
  templateUrl: './update-centre-profil.component.html',
  styleUrls: ['./update-centre-profil.component.scss']
})
export class UpdateCentreProfilComponent implements OnInit {

  updateUserForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private userService:CentreUserService,
    private router : Router
  ) {

    let formControls = {
      nom: new FormControl('',[
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
      description: new FormControl('',[
        Validators.required,
      ]),
    }

    this.updateUserForm = this.fb.group(formControls)
  }

  get nom() { return this.updateUserForm.get('nom') }
  get adresse() { return this.updateUserForm.get('adresse') }
  get email() { return this.updateUserForm.get('email') }
  get password() { return this.updateUserForm.get('password') }
  get tel() { return this.updateUserForm.get('tel') }
  get description() { return this.updateUserForm.get('description') }




  

  ngOnInit(): void {
    let idUser = this.route.snapshot.params.id;
    
    
    this.userService.getOneUser(idUser).subscribe(
      (res: any)=>{
        let CentreUser = res;

        this.updateUserForm.patchValue({
          nom : CentreUser.nom,
          adresse: CentreUser.adresse,
          email: CentreUser.email,
          tel: CentreUser.tel,
          description: CentreUser.description
        })
        
      },
      (err: any)=>{
        console.log(err);
      }
    )
  }
  updateUser() {
    let data = this.updateUserForm.value;
    let idUser = this.route.snapshot.params.id;
    let user = new CentreUser(
      idUser,
      data.nom,
      data.adresse,
      data.email,
      data.password,
      data.tel,
      data.description);
      
    console.log(user);
    

    this.userService.updateUser(user).subscribe(
      res=>{
        console.log(res);

        this.router.navigate(['/CentreProfil/'+idUser]);
      },
      err=>{
        console.log(err);
      }
    )

  }

}
