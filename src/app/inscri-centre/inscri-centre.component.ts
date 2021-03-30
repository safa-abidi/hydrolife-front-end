import { CentreUserService } from './../services/CentreUser.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { CentreUser } from '../models/CentreUser.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from './../services/Image.service';

@Component({
  selector: 'app-inscri-centre',
  templateUrl: './inscri-centre.component.html',
  styleUrls: ['./inscri-centre.component.scss'],
})
export class InscriCentreComponent implements OnInit {




  


public centres: CentreUser[] = [];

constructor(private centreUserService: CentreUserService,
            private Router: Router,
            private toastr: ToastrService) {}

ngOnInit(): void {}

onSubmit(form: NgForm) {
  this.centreUserService.addUser(form.value).subscribe(
    (response: CentreUser) => {
      this.Router.navigate(['/Home']);
      console.log(response);
      this.toastr.success('Votre centre est inscrit avec succée');
      form.reset();
    },
    (error: HttpErrorResponse) => {
      this.toastr.error("Ce centre est deja inscrit");
    }
  );
}

 /* addUserForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private userService:CentreUserService,
    private router : Router,
    private toastr: ToastrService,
    public crudApi: ImageService
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
      ])
    }

    this.addUserForm = this.fb.group(formControls)
  }
  get nom() { return this.addUserForm.get('nom') }
  get adresse() { return this.addUserForm.get('adresse') }
  get email() { return this.addUserForm.get('email') }
  get password() { return this.addUserForm.get('password') }
  get tel() { return this.addUserForm.get('tel') }
  get description() { return this.addUserForm.get('description') }


  
  ngOnInit(): void {
  }

  onSubmit() {
  
    this.addData();
    
}

  addData() {
    const formData = new  FormData();
    const centre = this.addUserForm.value;
    console.log(centre);

    
    
    formData.append('centre',(centre));
    formData.append('profilePic',this.documentFile);
    this.userService.createData(formData).subscribe( data => {

      this.toastr.success("Photo ajouté avec succès");


    },
    err => {
      console.log(err);
      
      this.toastr.error("Photo non ajouté réessayer");


    }
    
    );
  }
  public documentFile: any= File;

  onSelectFile(event: any) {

    const profilePic=event.target.files[0];
  this.documentFile=profilePic;
  }*/




}