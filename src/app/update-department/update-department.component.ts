import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { EmployeeserviceService } from '../employeeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit {

  department:any;
  id!:any;
  constructor(private employeeService:EmployeeserviceService,private router:Router,private activateRouter:ActivatedRoute) {
    this.department=new Department();
   }

  ngOnInit(): void {
    this.id=this.activateRouter.snapshot.params['id'];
    this.employeeService.getDepartmentById(this.id).subscribe(data=>{
      this.department=data;
    },
    error=>console.log(error));
  }

  onSubmit()
  {
    this.employeeService.updateDepartmentById(this.id,this.department).subscribe(data=>{
      console.log(data);
      //this.goToEmployeeList();
    },
    error=>console.log(error));
  }

  // goToEmployeeList()
  //   {
  //     this.router.navigate(['/employees']);
  //   }
}
