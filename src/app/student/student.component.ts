import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { studentDetails } from '../Student';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  ngOnInit(): void {
    
  }

  source: string;
  empList: Array<studentDetails> = [];
  employee: studentDetails = {
    id: '',
    name: '',
    city: ''
  };

  editMode = false;

  constructor() { }

  addEmployee() {
    if (this.editMode) {
      this.empList.forEach((employee) => 
      {
        if (employee.id === this.employee.id) 
        {
          employee.name === this.employee.name;
          employee.city === this.employee.city;
          this.editMode = false;
          this.employee =
          {
            id: '',
            name: '',
            city: ''
          }
        }
      })
    } else {
      this.empList.push(this.employee);
      this.employee = {
        id: '',
        name: '',
        city: ''
      }
    }

  }

  

  deleteEmployee(emp: studentDetails) {
     let newEmpList = this.empList.filter((employee)=> emp.id !== employee.id);
     this.empList = newEmpList;
  }
}
