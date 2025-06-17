import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth } from '@angular/fire/auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

@Component({
  selector: 'signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignUpComponent {
  signupForm: FormGroup;
  errorMessage: string='';
  successMessage: string='';

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router) {
    this.signupForm = this.fb.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  async onSubmit() {
    const { email, password, confirmPassword } = this.signupForm.value;

    if (password !== confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.successMessage = 'Account created successfully! 🎉';
      this.errorMessage = '';
      setTimeout(() => this.router.navigate(['/']), 1500);

      // this.router.navigate(['/']);
    } catch (error: any) {
      this.errorMessage = error.message;
      this.successMessage = '';
    }
  }
}
