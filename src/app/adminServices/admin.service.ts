import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  serverURL = "https://user-portal-server-angular.onrender.com"

  constructor(private http:HttpClient,private router:Router) { }

  loginAPI(email:any,password:any){
    // api call
    this.http.get(`${this.serverURL}/users/1`).subscribe((result:any)=>{
      if(email==result.email && password==result.password){
        sessionStorage.setItem("admin",JSON.stringify(result))
        alert("Login Success!!!")
        // navigate to dashboard
        this.router.navigateByUrl('dashboard')
      }else{
        alert("Invalid Email / Password!!!")
      }
    })
  }

  getAdminDetailsAPI(){
   return this.http.get(`${this.serverURL}/users/1`)
  }
  editAdminAPI(adminDetails:any){
    return this.http.put(`${this.serverURL}/users/1`,adminDetails)

  }
  isLoggedIn(){
    return !!sessionStorage.getItem("admin")
  }
}
