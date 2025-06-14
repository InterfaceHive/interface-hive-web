import { Injectable } from '@angular/core';
import { Auth, signOut } from '@angular/fire/auth';
import { authState } from 'rxfire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<User | null>;

  constructor(private auth: Auth, private router: Router) {
    this.user$ = authState(this.auth);
  }

  logout(): void {
    signOut(this.auth).then(() => {
      this.router.navigate(['/login']);
    });
  }
}