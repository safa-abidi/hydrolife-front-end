import { Injectable } from "@angular/core";
import { ClientUser } from "../models/ClientUser.model";
import { ClientUserUpdate } from "../models/ClientUserUpdate.model";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class ClientUserService {

    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) {}


    addUser(user: ClientUser) {
        return this.http.post<any>( `${this.apiServerUrl}/api/client/add`, user);
      }

      getUserDet(email: string) {
        return this.http.get<any>(`${this.apiServerUrl}/api/client/get/${email}`)
      }

      getOneClient(id: any) {
        return this.http.get<any>(`${this.apiServerUrl}/api/client/find/${id}`)
      }

      loginAdmin(user: ClientUser){
        return this.http.post<any>(`${this.apiServerUrl}/api/authenticate`, user);
      }
    
      isClientLoggedIn(){
    
        let token = localStorage.getItem("myTokenClient");
    
        if (token) {
          return true ;
        } else {
          return false;
        }
      }
    
      ClientlogOut(){
        let token = localStorage.removeItem("myTokenClient");
      }

      updateClient(user:ClientUserUpdate){
        let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myTokenClient"));
        return this.http.put<any>( `${this.apiServerUrl}/api/client/update`, user, {headers: header});
      }
    
 }