import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'signup',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignUpComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private auth: Auth, private router: Router) {}

  signUp() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }

    createUserWithEmailAndPassword(this.auth, this.email, this.password)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
}
