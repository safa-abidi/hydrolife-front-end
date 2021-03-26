import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CentreUserService } from '../services/CentreUser.service';
import { Services } from '../models/Service.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ajouter-service',
  templateUrl: './ajouter-service.component.html',
  styleUrls: ['./ajouter-service.component.scss']
})
export class AjouterServiceComponent implements OnInit {

  addServiceForm: FormGroup
  idUser: number | undefined;

  constructor(
    private fb: FormBuilder,
    private route:ActivatedRoute,
    private userService:CentreUserService,
    private router : Router,
    private toastr: ToastrService
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

    let idUser = localStorage.getItem("myId");
    let data = this.addServiceForm.value;
    
    let service = new Services(
      data.libelle_service,
      data.description_service,
      data.prix_service,  
      );
      
    this.userService.addService(service).subscribe(
      res=>{
        
        this.toastr.success("Nouveau service ajouté avec succès");

       this.router.navigate(['/CentreService/'+ idUser]);
      },
      err=>{
        console.log(err);
      }
    );
    
  }

}






















