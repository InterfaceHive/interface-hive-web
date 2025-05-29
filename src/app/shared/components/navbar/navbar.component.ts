// navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

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
  currentUrl: string = '';
  profile = {
    username: 'jsDevMaster'
  };

  constructor(private router: Router) {
    this.router.events    
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentUrl = event.urlAfterRedirects;
      });
  }

  isViewProfilePage(): boolean {
    console.log('Current URL:', this.currentUrl);

    return ['/view-profile'].includes(this.currentUrl);
  }
}