import { Component,OnInit,ChangeDetectorRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileListPayload } from './ProfileList_payload';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrl: './profiles-list.component.css'
})

export class ProfilesListComponent implements OnInit {
  @Input() profileListPayload: ProfileListPayload[]=[];
  

  constructor(private router : Router) {}

  ngOnInit() {
  }

  goToIndividualProfile(id : string){
    this.router.navigate(['individualProfile',id]);
  }
}
