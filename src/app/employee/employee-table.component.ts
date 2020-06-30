import { Component } from '@angular/core';
import { EmployeeComponent } from './employee.component';

@Component({
  selector: 'app-employee-table',
  template: `
    <h1>{{heading}}</h1>
    <table>
      <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
      </tr>
      <tr *ngFor="let employee of employees">
        <td>{{employee.firstName}}</td>
        <td>{{employee.lastName}}</td>
        <td>{{employee.email}}</td>
        <td><button (click)="selectEmployee(employee)">Select</button></td>
      </tr>
    </table>
  `
})
export class EmployeeTableComponent extends EmployeeComponent { }
