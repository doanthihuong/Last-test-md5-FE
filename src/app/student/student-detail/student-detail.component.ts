import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../sevice/student.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
students:any;
  constructor(private studentService:StudentService,
  private router: Router,
  private activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.findById(id);
    })
  }
  findById(id: any) {
    this.studentService.getById(id).subscribe((data) => {
      console.log(data);
      this.students = data
    })
  }

}
