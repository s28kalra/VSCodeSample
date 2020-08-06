import { Component, OnInit } from "@angular/core";
import { Employee } from "./employee";
@Component({
    selector:'print-employee',
    template:`
        <table>
          <tr>
            <th>EmployeeId</th>
            <th>EmployeeName</th>
            <th>EmployeeAge</th>
            <th>EmployeeDesignation</th>
          </tr>
          <tr *ngFor='let c of employees'>
            <td>{{c.employeeId}}</td>
            <td>{{c.employeeName}}</td>
            <td>{{c.employeeAge}}</td>
            <td>{{c.employeeDesignation}}</td>
          </tr>


        </table>
    `,
    styles: []
})
export class PrintEmployee {
    
  employee1=new Employee('1','Sagar','21','GET');
  employee2=new Employee('2','Ema','29','HR');
  employee3=new Employee('3','Mike','30','Trainer');
  employees: Employee[];
    constructor(){
        this.employees=[this.employee1,this.employee2,this.employee3];
        
    }
    
}