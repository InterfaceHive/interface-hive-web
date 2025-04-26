// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ViewRequestsComponent } from './features/view-requests/view-requests.component';
import { CreateRequestComponent } from './features/create-request/create-request.component';
import { ViewMyRequestsComponent } from './features/view-my-requests/view-my-requests.component';
import { ViewMyContributionsComponent } from './features/view-my-contributions/view-my-contributions.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-requests', component: ViewRequestsComponent },
  { path: 'create-request', component: CreateRequestComponent },
  { path: 'view-my-requests', component: ViewMyRequestsComponent },
  { path: 'view-my-contributions', component: ViewMyContributionsComponent},
  { path: '**', redirectTo: '' }
];
