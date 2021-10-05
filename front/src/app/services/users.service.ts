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

  getUsers(): Observable<User | any>  {
    return this.http.get(this.baseUrl, { headers: { Authorization: this.headers } });
  }
}
