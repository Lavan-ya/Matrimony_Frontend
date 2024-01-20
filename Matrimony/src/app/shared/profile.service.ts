import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileRegister } from '../profile/register-profile/ProfileRegister_payload';
import { SearchPayload } from '../profile/search/search_payload';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient : HttpClient) {
    
   }

   baseurl = "http://localhost:8080/api/candidates";

searching(search_payload : SearchPayload){
    let params = new HttpParams();
  params = params.append('gender', search_payload.gender);
  params = params.append('ageFrom', search_payload.ageFrom);
  params = params.append('ageTo', search_payload.ageTo);
  params = params.append('religion', search_payload.religion);

  return this.httpClient.get<any>(`${this.baseurl}/searchProfiles`,{params:params});
   }

searchAll(){
  return this.httpClient.get<any>(`${this.baseurl}/searchAllProfiles`);
}

searchIndividualProfile(id:string){
  return this.httpClient.get<any>(`${this.baseurl}/searchIndividualProfile/${id}`);
}

insertProfile(profileRegister:ProfileRegister){
  
}

}
