import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient, private router :Router) { }

  public loginEmployee(employee:any){
    return this.http.post("http://localhost:8080/ems/login", employee, {responseType:'text' as  'json'});
  }

  loginEmployeeByToken(token:string){
    {
      if(token === 'ROLE_ADMIN'){
        // this.goToPage('admin');
        this.router.navigate(['admin']);
      }
      else if(token === 'ROLE_USER'){
        
        // this.goToPage('user');
        this.router.navigate(['user']);
      }
      else{
        alert("username or password incorrect ");
        
      }
    localStorage.setItem("token", token)
    return true;
  }
}


  isLogedIn(){
    let token = localStorage.getItem("token");
    if(token == undefined || token === '' || token == null){
      return false;
    }
    else{
      return true;
    }
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['']);
    return true;
  }

  getToken(){
    return localStorage.getItem("token")
  }
}
