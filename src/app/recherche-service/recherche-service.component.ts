import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CentreUserService } from '../services/CentreUser.service';
import { SearchService } from '../services/Search.service';


@Component({
  selector: 'app-recherche-service',
  templateUrl: './recherche-service.component.html',
  styleUrls: ['./recherche-service.component.scss']
})
export class RechercheServiceComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  info:any;
  LeMot:any;
  infoCentre:any;
  div1:any = false;
  

 SearchForm: FormGroup

  constructor(
      public userService: CentreUserService,
      private Search: SearchService,
      private fb: FormBuilder,

  ) { 
    let formControls = {
      mot: new FormControl('',[
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ])
  }
  this.SearchForm = this.fb.group(formControls)

 }

 get mot() { return this.SearchForm.get('mot') }

  ngOnInit(): void {

    this.LeMot = this.SearchForm.get('mot');

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  onSubmit(){ 
    this.LeMot = this.SearchForm.get('mot');
    
      if (this.LeMot.value.length != 0) {
            this.div1=true;
              }
                else 
                    {
                        this.div1=false;

                      }

    this.Search.SearchService(this.LeMot.value).subscribe(
      (result)=>{
        
        this.info = result;
        
      } ),
    this.Search.SearchCentre(this.LeMot.value).subscribe(
      (result)=>{
        
        this.infoCentre = result
        
      })

     
  }

  Close(){
    this.div1=false;
    this.SearchForm.reset();
  }
}
