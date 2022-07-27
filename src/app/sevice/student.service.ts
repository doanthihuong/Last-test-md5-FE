import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";



@Injectable({
  providedIn: 'root'
})
export class StudentService {
  API='http://localhost:3000/students';
  constructor(private httpClient: HttpClient) { }
  findAll(): Observable<Student>{
    return this.httpClient.get<Student>(this.API);
  }
  save(student:Student): Observable<any> {
    return this.httpClient.post(this.API,student);
  }
  getById(id: any): Observable<Student> {
    return this.httpClient.get<Student>(this.API + `/${id}`);
  }
  edit(id: number, student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.API}/${id}`, student);
  }
  delete(id: number): Observable<Student> {
    return this.httpClient.delete<Student>(this.API + `/${id}`);
  }

}
