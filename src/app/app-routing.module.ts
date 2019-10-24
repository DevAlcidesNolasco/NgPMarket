import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { AfiliatedsComponent } from './afiliateds/afiliateds.component';
import { AuthGuard } from './auth/auth.guard';
import { MapComponent } from './map/map.component';
import { EnterpriseComponent } from './enterprise/enterprise.component';
const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'enterprise',
    component: EnterpriseComponent
  },
  {
    path: 'enterprise/logged',
    component: EnterpriseComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'information/how-works',
    component: HowWorksComponent
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: 'information/afiliated',
    component: AfiliatedsComponent
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
