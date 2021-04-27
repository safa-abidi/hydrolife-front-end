import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ReservationUpdate } from '../models/ReservationUpdate.model'
import { Reservation } from '../models/Reservation.model';


@Injectable({ providedIn: 'root' })
export class ReservationService {


  constructor(private http: HttpClient) { }
 
  private apiServerUrl = environment.apiBaseUrl;

  addReservation(idService: string, dets: any) {
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myTokenClient"))
    return this.http.post<any>( `${this.apiServerUrl}/api/reservation/${idService}/add`,dets, {headers: header});
  }

  getAllResOfClient(id: any) {

    return this.http.get<any>( `${this.apiServerUrl}/api/reservation/findbyclient/${id}`);
  }

  getAllResOfCentre(id: any) {

    return this.http.get<any>( `${this.apiServerUrl}/api/reservation/findbycentre/${id}`);
  }

  getOneRes(id: any) {

    return this.http.get<any>( `${this.apiServerUrl}/api/reservation/find/${id}`);
  }

  
  deleteRes(id: any) {

    return this.http.delete<any>( `${this.apiServerUrl}/api/reservation/delete/${id}`);
  }

  updateReservation(reservation:Reservation){
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myTokenClient"))
    return this.http.put<any>( `${this.apiServerUrl}/api/reservation/update`, reservation,{headers: header});
  }
  
  

}
