import { Component, OnInit } from '@angular/core';
import { AddNewEmployeeService } from '../add-new-employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{

  employee : Employee = new Employee("", "","","");
  message:any;
  role:any = this.employee.role;
  
  constructor(private service:AddNewEmployeeService, private router :Router){}

  ngOnInit(){
    console.log(this.employee.role);
    this.message = this.role;
  } 
  
  public addEmployee(){
    
    let resp = this.service.addNewEmployee(this.employee);
    resp.subscribe((data)=>this.message=data);
  }

  public alertMessage(){
    let alertMessage = "Employee Successfully added";
    alert(alertMessage);
  }

  public navigateTo(){
    if(localStorage.getItem("token") === 'ROLE_ADMIN'){

      this.router.navigate(['admin']);
    }
    else{
      this.router.navigate(['']);
    }
  }

}
