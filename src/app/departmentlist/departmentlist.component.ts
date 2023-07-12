import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { EmployeeserviceService } from '../employeeservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
departments:any;
isDelete=false;
message!:String;

  constructor(private employeeService:EmployeeserviceService,private router:Router) {
    this.departments=new Department();
   }

  ngOnInit(): void {
    this.getAllDpm();
  }
  private getAllDpm()
  {
    this.employeeService.getAllDepList().subscribe(data=>
      {
        this.departments=data;
      })
  }
  updateDepartment(id:number)
  {
   this.router.navigate(['update-department',id]);
  }
  deleteDepartment(id:any)
  {
    this.employeeService.deleteDpmById(id).subscribe(data=>{
      console.log(data);
  })
  }
}
