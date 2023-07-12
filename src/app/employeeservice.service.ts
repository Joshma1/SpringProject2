import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Department } from './department';
import { Params } from '@angular/router';
import { Assignment } from './assignment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
private addEmp="http://localhost:8080/emp/addEmployee";
private getAllEmp="http://localhost:8080/emp/getAllEmployee";
private getEmpById="http://localhost:8080/emp/getById";
private getDpmById="http://localhost:8080/dpm/getById";
private updateEmployee="http://localhost:8080/emp/updateEmployee";
private updateDepartment="http://localhost:8080/dpm/updateDepartment";
private deleteEmployee="http://localhost:8080/emp/deleteEmployee";
private deleteDepartment="http://localhost:8080/dpm/deleteDepartment";
private saveDept="http://localhost:8080/dpm/addDepartment";
private getAllDpm="http://localhost:8080/dpm/getAllDepartment";
private assignment="http://localhost:8080/api/assignment";

  constructor(private httpClient:HttpClient) { }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.addEmp}`,employee);
  }
  getAllEmployeeList():Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(`${this.getAllEmp}`);
  }
  getAllDepList():Observable<Department[]>
  {
    return this.httpClient.get<Department[]>(`${this.getAllDpm}`);
  }
  getEmplyeeById(id:number):Observable<Employee>
  {
    return this.httpClient.get<Employee>(`${this.getEmpById}/${id}`);
  }
  getDepartmentById(id:any):Observable<Department>
  {
    return this.httpClient.get<Department>(`${this.getDpmById}/${id}`);
  }
  updateEmployeeById(id:any,employee:any):Observable<any>
  {
    return this.httpClient.put<any>(`${this.updateEmployee}/${id}`,employee);
  }
  updateDepartmentById(id:any,department:any):Observable<any>
  {
    return this.httpClient.put<any>(`${this.updateDepartment}/${id}`,department);
  }
  deleteEmployeeById(id:any):Observable<any>
  {
    return this.httpClient.delete<any>(`${this.deleteEmployee}/${id}`);
  }
  deleteDpmById(id:any):Observable<any>
  {
    return this.httpClient.delete<any>(`${this.deleteDepartment}/${id}`);
  }
  createDepartment(department:any):Observable<any>{
    return this.httpClient.post<any>(`${this.saveDept}`,department);
  }

  assignEmployee(empId:number,deptId:number):Observable<Params>
  {
    return this.httpClient.post(`${this.assignment}/${empId}/${deptId}`,Assignment);
  }
}
