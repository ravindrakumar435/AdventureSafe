import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { ProfileComponent } from '../screens/profile/profile.component';
import { AdminComponent } from '../screens/admin/admin.component';
import { MessagesComponent } from '../screens/messages/messages.component';
import { DashboardComponent } from '../screens/dashboard/dashboard.component';
import { HeaderComponent } from '../screens/header/header.component';
import { MapComponent } from '../screens/map/map.component';
import { AgmCoreModule } from '@agm/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { EventsComponent } from '../screens/events/events.component';
import { AssetsComponent } from '../screens/assets/assets.component';

import { SongsManagementComponent } from '../screens/songs-management/songs-management.component';
import { MainComponent } from './main/main.component';
import { SidebarComponent } from '../screens/sidebar/sidebar.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ProfileComponent,
    AdminComponent,
    MessagesComponent,
    DashboardComponent,
    HeaderComponent,
    MapComponent,
    EventsComponent,
    AssetsComponent,
    SongsManagementComponent,
    MainComponent,
    SidebarComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      resetTimeoutOnDuplicate: true,
      preventDuplicates: true,
      positionClass: 'toast-top-center',
    }),

    MainRoutingModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiTuyfeiLXpcg4s4vlscRanQ47uIHGuFk',
    }),
  ],
})
export class MainModule {}
