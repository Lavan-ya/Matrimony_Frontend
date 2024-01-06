import { Component,OnInit } from '@angular/core';
import { ProfileService } from '../../shared/profile.service';
import { SearchPayload } from './search_payload';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
ageFrom : number[] = [];
ageTo : number[] =[];

searchPayload !: SearchPayload;
constructor(private profileService : ProfileService){

}

ngOnInit(){
  this.ageCalculator();
}

ageCalculator(){
  let j=0;
  for(let i=20;i<51;i++){
    this.ageFrom[j]=i;
    this.ageTo[j]=i+1;
    j++;
  }
}

submitSearch(){
  alert("submitted");
  console.log("Submitted");
this.profileService.searching(this.searchPayload);
}
}
