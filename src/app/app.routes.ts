// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ViewRequestsComponent } from './features/view-requests/view-requests.component';
import { CreateRequestComponent } from './features/create-request/create-request.component';
import { ViewMyRequestsComponent } from './features/view-my-requests/view-my-requests.component';
import { ViewMyContributionsComponent } from './features/view-my-contributions/view-my-contributions.component';
import { AboutComponent } from './features/about/about.component';
import { ContactUsComponent } from './features/contact-us/contact-us.component';
import { LoginComponent } from './features/login/login.component';
import { SignUpComponent } from './features/signup/signup.component';
import { ViewProfileComponent } from './features/view-profile/view-profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-requests', component: ViewRequestsComponent },
  { path: 'create-request', component: CreateRequestComponent },
  { path: 'view-my-requests', component: ViewMyRequestsComponent },
  { path: 'view-my-contributions', component: ViewMyContributionsComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignUpComponent},
  { path: 'view-profile', component: ViewProfileComponent},
  { path: '**', redirectTo: '' }
];
