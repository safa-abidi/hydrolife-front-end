import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { Services } from '../models/Service.model';
import { HttpErrorResponse } from '@angular/common/http';
import { CentreUser } from '../models/CentreUser.model';

@Component({
  selector: 'app-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrls: ['./ajouter-service.component.scss']
})
export class AjouterServiceComponent implements OnInit {

  public service: Services[] = [];



  constructor(private centreUserService: CentreUserService,
    private Router: Router) {}

ngOnInit(){}



onSubmit(form: NgForm) {
  this.centreUserService.addService(form.value).subscribe(
    (response: Services) => {
      //this.Router.navigate(['']);
      console.log(response);
      //this.toastr.success('inscrit avec succée');
      form.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

















  /*

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
      ])
    }

    this.addServiceForm = this.fb.group(formControls)
    
   }
    
  get libelle_service() { return this.addServiceForm.get('libelle_service') }
  get description_service() { return this.addServiceForm.get('description_service') }
  get prix_service() { return this.addServiceForm.get('prix_service') }




  ngOnInit(): void {
  }

  addService(){

    let idUser = this.route.snapshot.params.id;
    let data = this.addServiceForm.value;
    

    let service = new Services(
      1,
      data.libelle_service,
      data.description_service,
      data.prix_service,
      idUser
      
      
      );
      console.log(service);
      
    this.userService.addService(service).subscribe(
      res=>{
        
       // this.toastr.success(res.message);
      console.log(res);
       
       // this.router.navigate(['/people-list']);
      },
      err=>{
        console.log(err);
      }
    );
    

  }
*/
}
