import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string;

  constructor(private http: HttpClient, private cookieService: CookieService) {
    this.baseUrl = `${environment.apiUrl}/auth`;
  }

  login(username: Number, password: string): Observable<any> {
    this.logout();
    return this.http.post(`${this.baseUrl}/login`, {username, password});
  }

  checkAuthenticated(): boolean {
    return this.cookieService.check('token');
  }

  logout() {
    this.cookieService.delete('token');
    localStorage.removeItem('user');
  }
}
