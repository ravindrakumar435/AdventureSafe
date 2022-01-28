import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpConfigInterceptor } from './api/interceptor/http-config.interceptor';

import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main/main.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,

    HttpClientModule,

    ToastrModule.forRoot({
      timeOut: 3000,
      resetTimeoutOnDuplicate: true,
      preventDuplicates: true,
      positionClass: 'toast-top-right',
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiTuyfeiLXpcg4s4vlscRanQ47uIHGuFk',
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpConfigInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
