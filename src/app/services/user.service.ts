import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CentreUser } from '../models/CentreUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<any>(`${this.apiServerUrl}/centre/all`);
  }

  /*getOneUser(id: String) {
    return this.http.get<any>(this.getOneUserUrl + id)
  }

  deleteUser(id: String) {
    return this.http.delete<any>(`${this.apiServerUrl}/centre/delete/${id}`)
  }

  addUser(user: User) {
    return this.http.post<any>(this.addUserUrl, user);
  }

  updateUser(user:User){
    return this.http.put<any>(this.updateUserUrl, user);
  }

  //Register & Login

  registerAdmin(user : User){
    return this.http.post<any>(this.registerUserUrl, user);
  }*/

  loginAdmin(user:CentreUser){
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

}