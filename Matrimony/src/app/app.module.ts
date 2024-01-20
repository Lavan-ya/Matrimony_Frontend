import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './profile/search/search.component';
import { ProfilesListComponent } from './profile/profiles-list/profiles-list.component';
import { Router } from '@angular/router';
import { IndividualProfileComponent } from './profile/individual-profile/individual-profile.component';
import { RegisterProfileComponent } from './profile/register-profile/register-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ProfilesListComponent,
    IndividualProfileComponent,
    RegisterProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
