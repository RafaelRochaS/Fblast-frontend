import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'registration',
    loadChildren:
      () => import('./registration/registration.module')
        .then(m => m.RegistrationModule),
  },
  {
    path: 'main',
    loadChildren:
      () => import('./logged/logged.module')
        .then(m => m.LoggedModule),
  },
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
