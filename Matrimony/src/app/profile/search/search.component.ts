import { Component,OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { SearchPayload } from './search_payload';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProfileListPayload } from '../profiles-list/ProfileList_payload';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
ageFrom : number[] = [];
ageTo : number[] =[];
searchResults: ProfileListPayload[] = [];
isDropdownVisible = false;
searchPayload : SearchPayload ;
showSearchResults = false;

constructor(private profileService : ProfileService,private router:Router){
this.searchPayload={
  'gender':'',
  'ageFrom':0,
  'ageTo':0,
  'religion':''
}
}

toggleDropdown() {
  this.isDropdownVisible = !this.isDropdownVisible;
}

ngOnInit(){
  this.ageCalculator();
  this.retrieveData();
}

ageCalculator(){
  let j=0;
  for(let i=20;i<51;i++){
    this.ageFrom[j]=i;
    this.ageTo[j]=i+1;
    j++;
  }
}

retrieveData() {
  const storedResults = localStorage.getItem('searchResults');
  if (storedResults) {
    this.searchResults = JSON.parse(storedResults);
  }
}

submitSearch(){
  if(this.searchPayload.gender === '' || this.searchPayload.gender === null&&
  this.searchPayload.ageFrom === 0 || this.searchPayload.ageFrom === null&&
  this.searchPayload.ageTo === 0 || this.searchPayload.ageTo ===null&&
  this.searchPayload.religion === '' || this.searchPayload.religion ===null){
    this.profileService.searchAll().subscribe(data=>{
      this.searchResults=data;
      localStorage.setItem('searchResults', JSON.stringify(data));
      this.showSearchResults=true;
    })
  }else{
    this.profileService.searching(this.searchPayload).subscribe(data=>{
      console.log(data);
      this.searchResults=data;
      localStorage.setItem('searchResults', JSON.stringify(data));
      this.showSearchResults=true;
    },
      error => {
          console.error("Error:", error);
      });
  }
}
}
