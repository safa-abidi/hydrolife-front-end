import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/Image.service'
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl }from '@angular/forms';

@Component({
  selector: 'app-ajouter-gallerie',
  templateUrl: './ajouter-gallerie.component.html',
  styleUrls: ['./ajouter-gallerie.component.scss']
})
export class AjouterGallerieComponent implements OnInit {

  addPhoto: FormGroup

  public message: string = "";
  userFile: any;

  constructor(public crudApi: ImageService ,private router : Router,  public fb: FormBuilder,public toastr: ToastrService,
 
    
    ) {let formControls = {
      titre_photo: new FormControl('',[
        Validators.required
      ]),
      description: new FormControl('',[
        Validators.required
      ])


     }
     this.addPhoto = this.fb.group(formControls);

    }
    get titre_photo() { return this. addPhoto.get('titre_photo') }
    get description() { return this. addPhoto.get('description') }

    ResetForm() {
      this.crudApi.dataForm.reset();
  }
onSubmit() {
  
    this.addData();
    
}

  addData() {
    const formData = new  FormData();
    const photo = this.addPhoto.value;
    console.log(photo);
    let idUser = localStorage.getItem("myId");
    
    
    formData.append('photo',JSON.stringify(photo));
    formData.append('file',this.documentFile);
    this.crudApi.createData(formData).subscribe( data => {

      this.toastr.success("Photo ajouté avec succès");

      this.router.navigate(['/CentreGallerie/'+ idUser]);
    },
    err => {
      this.toastr.error("Photo non ajouté réessayer");

      this.router.navigate(['/CentreGallerie/'+ idUser]);
    }
    
    );
  }
  public documentFile: any= File;

  onSelectFile(event: any) {

    const file=event.target.files[0];
  this.documentFile=file;
  }

  id = localStorage.getItem("myId");
  ngOnInit(){
  
    
  }

}
