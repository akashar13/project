import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  ngOnInit() {}
  
  constructor(private router: Router,private fb: FormBuilder, private profService:ProfileService) {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl('')
   

   
  });
  onSubmit(data:any) {
    // TODO: Use EventEmitter with form value
this.profService.login().subscribe((res:any)=>{
  const user = res.find((a:any)=>{
    return a.firstName == data.firstName && a.password == data.password 
  })
  if(user){
    this.router.navigateByUrl('/dash');
    this.profileForm.reset();
  }
  else{
    alert("no user found")
  }
})
  }
  register(){
    this.router.navigateByUrl('/register');
  }
  
}
