import { Routes } from '@angular/router';

import { HomeComponent } from '@src/app/pages/home/home.component';
import { CaiComponent } from './pages/cai/cai.component';
import { AlertsComponent } from './pages/alerts/alerts.component';
import { CommunityComponent } from './pages/community/community.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cai',
    component: CaiComponent,
  },
  {
    path: 'alerts',
    component: AlertsComponent,
  },
  {
    path: 'community',
    component: CommunityComponent,
  },
];
