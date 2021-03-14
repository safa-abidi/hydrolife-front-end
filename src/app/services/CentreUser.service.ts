import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CentreUser } from '../models/CentreUser.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CentreUserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  /*public getCentreUsers(): Observable<CentreUser[]> {
    return this.http.get<CentreUser[]>(`${this.apiServerUrl}/centre/all`);
  }

  public addCentreUsers(centre: CentreUser): Observable<CentreUser> {
    return this.http.post<CentreUser>(
      `${this.apiServerUrl}/centre/add`,
      centre
    );
  }
  public LogInCentreUsers(user: CentreUser): Observable<CentreUser> {
    return this.http.post<any>(
      `${this.apiServerUrl}/centre/authenticate`,
      user
    );
    console.log("connecté");
  }
  isLoggedIn(){

    let token = localStorage.getItem("myToken");

    if (token) {
      return true ;
    } else {
      return false;
    }
  }

 /* public LogIn(email: string, password: string){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(email + ':' + password) });
    this.http.get( `${this.apiServerUrl}/centre/authenticate`,{headers,responseType: 'text' as 'json'});
  }


  public updateCentreUser(centre: CentreUser): Observable<CentreUser> {
    return this.http.put<CentreUser>(
      `${this.apiServerUrl}/centre/update`,
      centre
    );
  }

  public deleteCentreUser(CentreUserId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiServerUrl}/centre/delete/${CentreUserId}`
    );
  }*/

  getAllUsers() {
    return this.http.get<any>(`${this.apiServerUrl}/centre/all`);
  }

  getOneUser(id: String) {
    return this.http.get<any>(`${this.apiServerUrl}/centre/all`)
  }

  deleteUser(id: String) {
    return this.http.delete<any>(`${this.apiServerUrl}/centre/delete/${id}`)
  }

  addUser(user: CentreUser) {
    return this.http.post<any>( `${this.apiServerUrl}/centre/add`, user);
  }

  updateUser(user:CentreUser){
    return this.http.put<any>( `${this.apiServerUrl}/centre/update`, user);
  }


  //Register & Login


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


}
