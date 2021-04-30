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
  id: any;

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
    
    this.id = localStorage.getItem("myId");
  }

  addData() {
    const formData = new  FormData();
    const service = this.addServiceForm.value;
    let idUser = localStorage.getItem("myId");
    
    
    formData.append('service',JSON.stringify(service));
    formData.append('file',this.documentFile);
    this.userService.createDataSer(formData).subscribe( data => {

      this.toastr.success("ser bi taswira ajouté avec succès");

      this.router.navigate(['/CentreService/'+ idUser]);
    },
    err => {
      this.toastr.error("ser bi taswira non ajouté réessayer");

    }
    
    );
  }
  public documentFile: any= File;

  onSelectFile(event: any) {

    const file=event.target.files[0];
    this.documentFile=file;
  }

}






















