import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { Service } from '../models/Service.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrls: ['./ajouter-service.component.scss']
})
export class AjouterServiceComponent implements OnInit {

  addServiceForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private userService:CentreUserService,
    private router : Router
  ) { 
    let formControls = {
      libelle_service: new FormControl('',[
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      prix_service: new FormControl('',[
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      description_service: new FormControl('',[
        Validators.required,
      ]),
    }

    this.addServiceForm = this.fb.group(formControls)
   }

   get libelle_service() { return this.addServiceForm.get('libelle_service') }
  get prix_service() { return this.addServiceForm.get('prix_service') }
  get description_service() { return this.addServiceForm.get('description_service') }

  ngOnInit(): void {
  }

  addService(){

    let idUser = this.route.snapshot.params.id;

   // let idCentre = localStorage.getItem("myId")
    console.log(idUser);
    

    let data = this.addServiceForm.value;
    console.log(data);
    

    let service = new Service(
      data.description_service,
      idUser,
      data.libelle_service,
      data.prix_service);

    this.userService.addService(service).subscribe(
      (res: any)=>{
        
       // this.toastr.success(res.message);
      console.log(res);
       
       // this.router.navigate(['/people-list']);
      },
      (err: any)=>{
        //console.log(err);
      }
    )
    

  }

}
