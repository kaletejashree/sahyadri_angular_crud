import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'dob', 'gender', 'education', 'company', 'experience', 'package','action'];
  dataSource = new MatTableDataSource<any>();

  constructor(private _dialog: MatDialog, private _empService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeList();
  }

  openAddEditEmpForm() {
    this._dialog.open(EmpAddEditComponent);
  }

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        this.dataSource.data = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteEmployee(id:number){
    this._empService.deleteEmployee(id).subscribe({
      next:(res)=>{
  alert("employee deleted");
  this.getEmployeeList();
      },
      error:console.log,
    })
  }

  openEditForm(data:any) {
    this._dialog.open(EmpAddEditComponent,{
      data,
    });
  }
}
