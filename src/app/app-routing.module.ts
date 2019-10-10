import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path: 'profile', 
    component: ProfileComponent
  },
  {
    path: 'home', 
    component: HomeComponent
  },
  {
    path: '**', 
    redirectTo: '/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
