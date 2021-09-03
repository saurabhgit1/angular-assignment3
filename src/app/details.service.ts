import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor( ) { }

  formInfo = {
    name:'',
    email:'',
    password: '',
    mobileNumber: '',
    city:'',
    familyMembers:{
      relation:'',
      name:''
    }
  }
}
