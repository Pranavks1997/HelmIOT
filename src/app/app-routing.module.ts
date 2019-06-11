import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent,
  },
  {
    path: 'dashboard/:id/location',
    component: LocationComponent,
  },
  {
    path: 'dashboard/:id/about',
    component: AboutComponent
  },
  {
    path: 'dashboard/:id/logs',
    component: AboutComponent
  },
  {
    path: 'dashboard/:id/location',
    component: LocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
