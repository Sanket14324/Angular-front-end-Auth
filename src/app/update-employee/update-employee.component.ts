import { Component } from '@angular/core';
import { AddNewEmployeeService } from '../add-new-employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  employee: Employee = new Employee("","","","");
  message:any;

  constructor(private service:AddNewEmployeeService){

  }

  public updateEmployeeById(){
    let id = this.service.giveID();
    console.log(id);
    let resp = this.service.updateEmployee(id,this.employee);
    resp.subscribe((data) => this.message = data);
  }

  public alertMessage(){
    let alertMessage = "Employee Successfully updated!!!";
    alert(alertMessage);
  }
  ngOnInit(){

  }

}
