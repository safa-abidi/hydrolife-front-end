import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({ providedIn: 'root' })
export class ImageService {



  public dataForm!:  FormGroup; 


  constructor(private http: HttpClient) { }
 
  private apiServerUrl = environment.apiBaseUrl;


 
  createData(formData: FormData): Observable<any> {
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
    return this.http.post(`${this.apiServerUrl}/api/photo/add`, formData, {headers: header});
  }
  
 
  deleteData(id: number): Observable<any> {
   
    return this.http.delete(`${this.apiServerUrl}/api/photo//delete/${id}`, { responseType: 'text' });
  }

}
