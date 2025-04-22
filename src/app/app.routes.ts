// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ViewRequestsComponent } from './pages/view-requests/view-requests.component';
import { CreateRequestComponent } from './pages/create-request/create-request.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view-requests', component: ViewRequestsComponent },
  { path: 'create-request', component: CreateRequestComponent },
  { path: '**', redirectTo: '' }
];
