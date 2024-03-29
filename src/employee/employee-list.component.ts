import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-employee-list',
  template: `
    <h1>{{heading}}</h1>
    <ul>
      <li *ngFor="let employee of employees">
        {{employee.firstName}} {{employee.lastName}} <br>
        {{employee.email}} <br>
        <button (click)="selectEmployee(employee)">Select</button>
      </li>
    </ul>
  `
})
export class EmployeeListComponent extends EmployeeComponent {
  override heading = 'Employee List';
}
