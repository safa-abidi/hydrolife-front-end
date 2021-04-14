import { Injectable } from "@angular/core";
import { ClientUser } from "../models/ClientUser.model";
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: 'root' })
export class ClientUserService {

    private apiServerUrl = environment.apiBaseUrl;
    constructor(private http: HttpClient) {}


    addUser(user: ClientUser) {
        return this.http.post<any>( `${this.apiServerUrl}/api/client/add`, user);
      }
 }