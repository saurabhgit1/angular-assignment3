import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { DetailsService } from './details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  count:number=1;

  get name(){
    return this.registrationForm.get('name');
  }

  get familyMembers() {
    return this.registrationForm.get('familyMembers') as FormArray;
  }

  addFamilyMembers(){
    // member = this.fb.group({
    //   relation: ['', Validators.required],
    //   rname: ['', Validators.required]
    // });
    this.count++;
    this.familyMembers.push(this.fb.group({
      relation: ['', Validators.required],
      name: ['', Validators.required]
    }));
  }

  deleteFamilyMembers() {
    this.familyMembers.removeAt(this.familyMembers.length - 1);
  }

  constructor(private fb: FormBuilder, private details: DetailsService){}

  registrationForm = this.fb.group({
    name: ['',Validators.required],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
    mobileNumber: ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
    city: ['',Validators.required],
    familyMembers: this.fb.array([this.fb.group({
      relation: ['', Validators.required],
      name: ['', Validators.required]
    })])
  })

  onsubmit(){
    if(this.registrationForm.valid){
    this.details.formInfo.name = this.registrationForm.value.name;
    this.details.formInfo.password = this.registrationForm.value.password;
    this.details.formInfo.email = this.registrationForm.value.email;
    this.details.formInfo.mobileNumber = this.registrationForm.value.mobileNumber;
    this.details.formInfo.city = this.registrationForm.value.city;

    for(let i=0; i<this.count;i++){
    this.details.formInfo.familyMembers.push(this.registrationForm.value.familyMembers.at(i));
    }
    // this.details.formInfo.familyMembers.name = this.registrationForm.value.familyMembers.value.name;
    // this.details.formInfo.familyMembers.relation=this.registrationForm.value.familyMembers.value.relation;
    alert('submitted');}
    else{
      alert('Form is Invalid.');
    }
      
    
  }







  // registration_form = this.fb.group({
  //   username: ['def'],
  //   password: [''],
  //   confirmPassword: [''],
  //   address: this.fb.group({
  //     state: [''],
  //     postalCode: [''],
  //     city:['']
  //   })
  // });

//  registration_form = new FormGroup({
//    username: new FormControl(''),
//    password: new FormControl(''),
//    confirmPassword: new FormControl(''),
//    address: new FormGroup({
//      state: new FormControl(),
//      city: new FormControl(),
//      postalCode: new FormControl()
//    })
//  })

 

//  loadApi(){
//   this.registration_form.patchValue({
//     username: "John Doe",
//     // password: "hello pwd",
//     confirmPassword: "hn thik hai",
//     address:{
//       state: "jante ho up",
//       city: "allahabad",
//       postalCode: "211012"
//     }
//   })

//  }
   
}
