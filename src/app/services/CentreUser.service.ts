import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CentreUser } from '../models/CentreUser.model';
import { Services } from '../models/Service.model';
import { ServiceUpdate } from '../models/ServiceUpdate.model';
import { environment } from 'src/environments/environment';


@Injectable({ providedIn: 'root' })
export class CentreUserService {


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient
              /*private headers: HttpHeaders*/) {}

              

  getAllUsers() {
    return this.http.get<any>(`${this.apiServerUrl}/api/centre/all`);
  }

  getOneUser(id: any) {
    return this.http.get<any>(`${this.apiServerUrl}/api/centre/find/${id}`)
  }

  getUserDet(email: string) {
    return this.http.get<any>(`${this.apiServerUrl}/api/centre/get/${email}`)
  }

  deleteUser(id: string) {
    return this.http.delete<any>(`${this.apiServerUrl}/api/centre/delete/${id}`)
  }

  addUser(user: CentreUser) {
    return this.http.post<any>( `${this.apiServerUrl}/api/centre/add`, user);
  }

  updateUser(user:CentreUser){
    return this.http.put<any>( `${this.apiServerUrl}/api/centre/update`, user);
  }


  loginAdmin(user: CentreUser){
    return this.http.post<any>(`${this.apiServerUrl}/api/authenticate`, user);
  }

  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }

  logOut(){
    let token = localStorage.removeItem("myToken");
  }

  getAllServices() {
    return this.http.get<any>(`${this.apiServerUrl}/api/service/all`);
  }

  getOneService(id: any) {
    return this.http.get<any>(`${this.apiServerUrl}/api/service/find/${id}`)
  }

  deleteService(id: string) {
    return this.http.delete<any>(`${this.apiServerUrl}/api/service/delete/${id}`)
  }
 
  getAllServicesOfCenter(id: string){
    return this.http.get<any>(`${this.apiServerUrl}/api/service/findbycentre/${id}`)
  }


  addService(service: Services) {
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
  
    return this.http.post<any>( `${this.apiServerUrl}/api/service/add`,service,{headers: header}  );
  }

  updateService(service: ServiceUpdate){
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
    return this.http.put<any>( `${this.apiServerUrl}/api/service/update`, service,{headers: header});
  }
  
  getCentreServices(id: any) {
    return this.http.get<any>(`${this.apiServerUrl}/api/service/findbycentre/{id}`)
  }

}
