import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { HowWorksComponent } from './how-works/how-works.component';
import { AfiliatedsComponent } from './afiliateds/afiliateds.component';
import { PortalComponent } from './portal/portal.component';
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
    path: 'information/how-works',
    component: HowWorksComponent
  },
  {
    path: 'information/afiliated',
    component: AfiliatedsComponent
  },
  {
    path: 'portal',
    component: PortalComponent
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
