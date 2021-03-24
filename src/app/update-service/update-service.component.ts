import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { ServiceUpdate } from '../models/ServiceUpdate.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss']
})
export class UpdateServiceComponent implements OnInit {

  updateServiceForm: FormGroup
  id = localStorage.getItem("myId");

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private userService: CentreUserService,
    private router: Router,
    private toastr: ToastrService
  ) {
    let formControls = {
      libelle_service: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      prix_service: new FormControl('', [
        Validators.required,
        Validators.pattern("[0-9]+")
      ]),
      description_service: new FormControl('', [
        Validators.required,
      ])
    }

    this.updateServiceForm = this.fb.group(formControls)
  }
  get libelle_service() { return this.updateServiceForm.get('libelle_service') }
  get description_service() { return this.updateServiceForm.get('description_service') }
  get prix_service() { return this.updateServiceForm.get('prix_service') }


  ngOnInit(): void {

    let idSer = this.route.snapshot.params.id_service;
    
    this.userService.getOneService(idSer).subscribe(
      (res: any)=>{
        let Service = res;

        this.updateServiceForm .patchValue({
          libelle_service: Service.libelle_service,
          description_service: Service.description_service,
          prix_service: Service.prix_service
        });
        
      },
      (err: any)=>{
        console.log(err);
      }
    )
  }

  updateService() {
    let data = this.updateServiceForm.value;
    let idSer = this.route.snapshot.params.id_service;
    let service = new ServiceUpdate(
      idSer,
      data.libelle_service,
      data.description_service,
      data.prix_service
    )
    this.userService.updateService(service).subscribe(
      res=>{

       this.router.navigate(['/UpdatePromotion/'+localStorage.getItem("myId")]);

      },
      err=>{
        console.log(err);
      }
    );

  }

}