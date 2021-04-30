import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CentreUser } from '../models/CentreUser.model';
import { Services } from '../models/Service.model';
import { ServiceUpdate } from '../models/ServiceUpdate.model';
import { environment } from 'src/environments/environment';
import { Promotion } from '../models/Promotion.model';
import { Observable } from 'rxjs';
import { CentreUserUpdate } from '../models/CentreUserUpdate.model';


@Injectable({ providedIn: 'root' })
export class CentreUserService {

  host :string = "http://localhost:8080";

  listData: any;


  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

              
/*--------------CENTRE SERVICE------------------------------*/
  getAllCentres() {
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

  createData(formData: FormData): Observable<any> {
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
    return this.http.post(`${this.apiServerUrl}/api/centre/add`, formData, {headers: header});
  }

  addUser(user: CentreUser) {
    return this.http.post<any>( `${this.apiServerUrl}/api/centre/add`, user);
  }

  updateUser(user:CentreUserUpdate){
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
    return this.http.put<any>( `${this.apiServerUrl}/api/centre/update`, user, {headers: header});
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

  /*--------------CENTRE SERVICE------------------------------*/


  /*--------------SERVICE SERVICE------------------------------*/

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

  createDataSer(formData: FormData): Observable<any> {
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
    return this.http.post(`${this.apiServerUrl}/api/service/add`, formData, {headers: header});
  }

  updateService(service: ServiceUpdate){
    let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
    return this.http.put<any>( `${this.apiServerUrl}/api/service/update`, service,{headers: header});
  }
  
  getCentreServices(id: any) {
    return this.http.get<any>(`${this.apiServerUrl}/api/service/findbycentre/{id}`)
  }

/*--------------SERVICE SERVICE------------------------------*/

/*--------------PROMOTION SERVICE------------------------------*/

getAllPromotion() {
  return this.http.get<any>(`${this.apiServerUrl}/api/promotion/all`);
}

getOnePromotion(id: any) {
  return this.http.get<any>(`${this.apiServerUrl}/api/promotion/find/${id}`)
}

deletePromotion(id: string) {
  let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
  return this.http.delete<any>(`${this.apiServerUrl}/api/promotion/delete/${id}`, {headers: header})
}

getAllPromotionsOfCenter(id: string){
  let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
  return this.http.get<any>(`${this.apiServerUrl}/api/promotion/findbycentre/${id}`,{headers: header})
}

addPromotion(promotion: Promotion) {
  let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));

  return this.http.post<any>( `${this.apiServerUrl}/api/promotion/add`,promotion,{headers: header}  );
}

addPromotionForService(idService:any , promotion: Promotion) {
  let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));

  return this.http.post<any>( `${this.apiServerUrl}/api/promotion/${idService}/add`,promotion,{headers: header}  );
}

updatePromotion(promotion: Promotion){
  let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
  return this.http.put<any>( `${this.apiServerUrl}/api/promotion/update`, promotion ,{headers: header});
}


/*--------------PROMOTION SERVICE------------------------------*/



}
