import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CentreUser } from '../models/CentreUser.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CentreUserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  public getCentreUsers(): Observable<CentreUser[]> {
    return this.http.get<CentreUser[]>(`${this.apiServerUrl}/centre/all`);
  }

  public addCentreUsers(centre: CentreUser): Observable<CentreUser> {
    return this.http.post<CentreUser>(
      `${this.apiServerUrl}/centre/add`,
      centre
    );
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
  }
}
