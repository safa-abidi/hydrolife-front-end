import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({ providedIn: 'root' })
export class SearchService {

  host :string = "http://localhost:8080";

  listData: any;

  public dataForm!:  FormGroup; 


  constructor(private http: HttpClient) { }
 
  private apiServerUrl = environment.apiBaseUrl;

  SearchService(mot:any){
    
    return this.http.get(`${this.apiServerUrl}/api/service/rechercher?mot=${mot}`);
  }

  SearchCentre(mot:any){
    
    return this.http.get(`${this.apiServerUrl}/api/centre/search?mot=${mot}`);
  }
   

}
