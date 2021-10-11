import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {


  baseUrl="http://localhost:3000/userdata"
  constructor(public http: HttpClient ) { }

send(data:any){
  return this.http.post(this.baseUrl,data)
}
login(){
  return this.http.get<any>(this.baseUrl)
}
}
