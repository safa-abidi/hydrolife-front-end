import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Image } from '../models/Image.model';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';


@Injectable({ providedIn: 'root' })
export class ImageService {
    public dataForm!:  FormGroup; 

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

      createData(formData: FormData): Observable<any> {
        return this.http.post(`${this.apiServerUrl}`, formData);
      }
    }

