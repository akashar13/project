import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public collection = new Array
  public update = false;
  index: any;
  ngOnInit() { }

  constructor(private router: Router, private fb: FormBuilder, private profService: ProfileService) { }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)



  });
  onSubmit(data: any) {
    this.collection.push(data)

    console.log(this.collection)
    // TODO: Use EventEmitter with form value
    // console.warn(this.profileForm.value);
    this.profService.send(data).subscribe((res: any) => {
      console.log(res, "res")
      alert("registration succesfull")
      this.profileForm.reset()
    })
  }
  register() {
    this.router.navigateByUrl('/login');
  }
  edit(item: any, i: any) {
    this.profileForm.patchValue(item)
    this.update = true
    this.index = i
  }
  updateData(data: any) {
  this.collection.splice(this.index, 1, data)
  this.update = false
  }
  delete(ind:any){
    this.collection.splice(ind, 1 )
  }
}
