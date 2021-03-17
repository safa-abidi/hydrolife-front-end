import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CentreUser } from '../models/CentreUser.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CentreUserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get<any>(`${this.apiServerUrl}/centre/all`);
  }

  getOneUser(id: string) {
    return this.http.get<any>(`${this.apiServerUrl}/centre/all`)
  }

  deleteUser(id: string) {
    return this.http.delete<any>(`${this.apiServerUrl}/centre/delete/${id}`)
  }

  addUser(user: CentreUser) {
    return this.http.post<any>( `${this.apiServerUrl}/centre/add`, user);
  }

  updateUser(user:CentreUser){
    return this.http.put<any>( `${this.apiServerUrl}/centre/update`, user);
  }


  loginAdmin(user: CentreUser){
    return this.http.post<any>(`${this.apiServerUrl}/centre/authenticate`, user);
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


}
