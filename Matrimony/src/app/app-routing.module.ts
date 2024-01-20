import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './profile/search/search.component';
import { ProfilesListComponent } from './profile/profiles-list/profiles-list.component';
import { IndividualProfileComponent } from './profile/individual-profile/individual-profile.component';
import { RegisterProfileComponent } from './profile/register-profile/register-profile.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search',component:SearchComponent},
  {path:'profiles-list',component:ProfilesListComponent},
  {path:'individualProfile/:id',component:IndividualProfileComponent},
  {path:'registerProfile',component:RegisterProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
