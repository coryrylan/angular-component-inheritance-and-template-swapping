import { Component } from '@angular/core';

import { Employee } from './employee/interfaces';

const employees: Employee[] = [
  { id: 0, firstName: 'Luke', lastName: 'Skywalker', email: 'last_jedi@lukeskywalker.com' },
  { id: 1, firstName: 'Han', lastName: 'Solo', email: 'scoundrel@hansolo.com' },
  { id: 2, firstName: 'Leia', lastName: 'Organa', email: 'princess@leiaorgana.com' },
];

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayTable = true;
  employees = employees
  selectedEmployee = employees[0];

  constructor() { }

  ngOnInit() { }

  selectEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }
}
