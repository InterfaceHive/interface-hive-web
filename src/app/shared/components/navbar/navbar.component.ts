// navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../../features/auth/auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule]
})
export class NavbarComponent {
  // component code
  isLoggedIn = false; // Simulating a logged-in state
  user: User | null = null;
  currentUrl: string = '';
  profile = {
    username: 'jsDevMaster'
  };

  constructor(private router: Router, private authService: AuthService) {
    this.router.events    
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  ngOnInit(): void {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      this.isLoggedIn = !!user;
    });
  }
}