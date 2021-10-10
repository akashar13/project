import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.scss']
})
export class FormcompComponent implements OnInit {
  country: any | undefined;
  city: string | undefined;
  public departure: any;
  CountryData: Array<any> = [
    { name: 'IND', value: 'India' },
    { name: 'AUS', value: 'Australia' },
    { name: 'USA', value: 'America' },
    { name: 'RUS', value: 'Rusia' },
    { name: 'Eng', value: 'England' }
  ];
  private map = new Map<string, string[]>([
    ['India', ['Kerala', 'Goa']],
    ['USA', ['New York', 'America']],
  ])

  ngOnInit(): void {
  }
  constructor(private fb: FormBuilder,) {}

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    password: new FormControl(''),
    country: new FormControl(''),

    state: new FormControl(''),

    language: this.fb.array([])
  });
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
 
 
  onCheckboxChange(e:any) {
    const language: FormArray = this.profileForm.get('language') as FormArray;
  
    if (e.target.checked) {
      language.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      language.controls.forEach((item:any) => {
        if (item.value == e.target.value) {
          language.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  get countries(): string[] {
    return Array.from(this.map.keys());
  }

  get cities(): string[] | undefined {
    return this.map.get(this.country);
  }

}
