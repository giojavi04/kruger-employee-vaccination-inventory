import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public isAdmin: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    const user: any | null = localStorage.getItem('user');
    this.isAdmin = JSON.parse(user)?.isAdmin;
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }
}
