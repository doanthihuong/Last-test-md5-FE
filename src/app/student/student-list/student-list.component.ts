import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Student} from "../../model/student";
import {HttpClient} from "@angular/common/http";
import {StudentService} from "../../sevice/student.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  listStudent: any;
  constructor(private  httpClient:HttpClient,
              private  studentService:StudentService) { }

  ngOnInit(): void {
    this.getAll();
  }
 getAll (){
   this.studentService.findAll().subscribe((data) => {
     console.log(data)
     this.listStudent = data;
   }, error => {
     console.log(error)
   })
 }
  deleteStudent(id: any) {
    if (confirm('Are you sure you want to delete?')) {
      this.studentService.delete(id).subscribe(() => {
        alert("Ok");
        this.getAll()
      }, e => {
        console.log(e);
      });
    }
  }

}
