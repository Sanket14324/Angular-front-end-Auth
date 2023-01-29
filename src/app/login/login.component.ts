import { Component } from '@angular/core';
import { AddNewEmployeeService } from '../add-new-employee.service';
import { Employee } from '../employee';

import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  employee : Employee = new Employee("", "","","");
  message :any;


  // credentials :{
  //   username:string
  //   password:string
  // }
  constructor(private service:LoginServiceService, private router :Router){

  }

  public loginEmployee(){

    // let resp = this.service.loginEmployee(this.employee);

    

    if((this.employee.email != '' && this.employee.password != '') && (this.employee.email != null && this.employee.password != null)){
      this.service.loginEmployee(this.employee).subscribe((data:any)=>{
          this.service.loginEmployeeByToken(data)
        },
        error =>{
          console.log(error);
        }
      )
    }
    else{
      alert("Wrong credintials");
    }


    // resp.subscribe((data) => 
    
    // {
    //   if(data === 'ROLE_ADMIN'){
    //     // this.goToPage('admin');
    //     this.router.navigate(['admin']);
    //   }
    //   else if(data === 'ROLE_USER'){
        
    //     // this.goToPage('user');
    //     this.router.navigate(['user']);
    //   }
    //   else{
    //     alert("username or password incorrect ");
        
    //   }
    // }
    
    // );

    
  // }
/*
pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
*/

  // public navigate(data:any) :void{


  //   if(data === 'ROLE_ADMIN'){
  //     // this.goToPage('admin');
  //     this.router.navigate(['admin']);
  //   }
  //   else if(data === 'ROLE_USER'){
  //     // this.goToPage('user');
  //     this.router.navigate(['user']);
  //   }
  //   else{
  //     debugger
  //     this.message = data;
  //   }
  // }
  }

}
