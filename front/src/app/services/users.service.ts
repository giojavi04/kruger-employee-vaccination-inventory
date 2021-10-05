import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string;
  headers: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.baseUrl = `${environment.apiUrl}/users`;
    this.headers = `Bearer ${this.cookieService.get('token')}`;
  }

  getAll(): Observable<User | any>  {
    return this.http.get(this.baseUrl, { headers: { Authorization: this.headers } });
  }

  get(id: number): Observable<User | any> {
    return this.http.get(`${this.baseUrl}/${id}`, { headers: { Authorization: this.headers } });
  }

  create(user: User): Observable<User | any> {
    return this.http.post(`${this.baseUrl}/create`, user, { headers: { Authorization: this.headers } });
  }

  update(user: User, id: number): Observable<User | any> {
    return this.http.patch(`${this.baseUrl}/update/${id}`, user, { headers: { Authorization: this.headers } });
  }

  delete(id: number): Observable<unknown> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { headers: { Authorization: this.headers } });
  }
}
