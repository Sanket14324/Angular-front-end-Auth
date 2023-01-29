import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddNewEmployeeService {

  constructor(private http:HttpClient) { }
  id:any;
  public addNewEmployee(employee:any){
    return this.http.post("http://localhost:8080/ems",employee); //, {responseType:"text as json"}
  }


  public getAllEmployee(){
    return this.http.get("http://localhost:8080/ems");
  }

  public getEmployeeByName(name:string){
    return this.http.get("http://localhost:8080/ems/"+name);
  }

  public deleteEmployee(id:number){
    return this.http.delete("http://localhost:8080/ems/"+id);
  }

  public updateEmployee(id:number, employee:any){
    return this.http.put("http://localhost:8080/ems/"+id, employee);
  }

  

  public storeID(id:number){
    console.log(id+"inside the service store");
    this.id = id;
  }

  public giveID(){
    console.log(this.id+"inside the service give");
    return this.id;
  }
}
