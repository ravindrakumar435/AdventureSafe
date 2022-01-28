import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../screens/admin/admin.component';
import { AssetsComponent } from '../screens/assets/assets.component';
import { DashboardComponent } from '../screens/dashboard/dashboard.component';
import { EventsComponent } from '../screens/events/events.component';
import { MessagesComponent } from '../screens/messages/messages.component';
import { ProfileComponent } from '../screens/profile/profile.component';
import { SongsManagementComponent } from '../screens/songs-management/songs-management.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'message', component: MessagesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'events', component: EventsComponent },
      { path: 'assets', component: AssetsComponent },
      { path: 'songs', component: SongsManagementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
