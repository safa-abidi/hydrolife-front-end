import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({ providedIn: 'root' })
export class ReservationService {

  host :string = "http://localhost:8080";

  listData: any;

  public dataForm!:  FormGroup; 


  constructor(private http: HttpClient) { }
 
  private apiServerUrl = environment.apiBaseUrl;

  addReservation(idService: string, dets: any) {
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myTokenClient"))
    return this.http.post<any>( `${this.apiServerUrl}/api/reservation/${idService}/add`,dets, {headers: header});
  }

 
  

}
