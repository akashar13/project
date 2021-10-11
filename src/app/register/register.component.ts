import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  ngOnInit() {}
  
  constructor(private router:Router,private fb: FormBuilder, private profService:ProfileService) {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl('')
   

   
  });
  onSubmit(data:any) {
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
    this.profService.send(data).subscribe((res:any)=>{
      console.log(res,"res")
      alert("registration succesfull")
    })
  }
  register(){
    this.router.navigateByUrl('/login');
  }
}
