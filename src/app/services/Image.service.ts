import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Image } from '../models/Image.model';


@Injectable({ providedIn: 'root' })
export class ImageService {

    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    addImage(image: Image) {
        let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
        return this.http.post<any>(`${this.apiServerUrl}/api/photo/add`, image, {headers: header} );
      }
    
    getAllImageOfCenter(id: string){
        let header = new HttpHeaders().set("Authorization","Bearer " + localStorage.getItem("myToken"));
            return this.http.get<any>(`${this.apiServerUrl}/api/photo/findbycentre/${id}`,{headers: header} )
          }

    getAllImage(){
        return this.http.get<any>(`${this.apiServerUrl}/api/photo/all`)
    }

    deleteImage(id: string){
        return this.http.delete<any>(`${this.apiServerUrl}/api/photo//delete/${id}`)
    }
    }

