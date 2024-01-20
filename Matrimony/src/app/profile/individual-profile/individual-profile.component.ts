import { Component,OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../shared/profile.service';
import {individualprofile_payload} from './individual-profile_payload';

@Component({
  selector: 'app-individual-profile',
  templateUrl: './individual-profile.component.html',
  styleUrl: './individual-profile.component.css'
})
export class IndividualProfileComponent implements OnInit{
  id!:string;
  Individualprofile_payload!:individualprofile_payload;
  constructor(private router:Router , private profileService : ProfileService,private route:ActivatedRoute){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.profileService.searchIndividualProfile(this.id).subscribe(data=>{
      console.log(data);
      this.Individualprofile_payload=data;
    })
  }

}
