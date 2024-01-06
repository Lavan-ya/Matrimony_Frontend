import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './profile/search/search.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'search/',component:SearchComponent}
];
