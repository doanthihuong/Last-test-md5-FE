import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {StudentService} from "../../sevice/student.service";

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {

  form = new FormGroup( {
    name: new FormControl(''),
    description : new FormControl(''),
    action: new FormControl('')
  })
  obj:any;
  id:any
  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute,
  private router: Router,
  private studentService:StudentService) { }

  ngOnInit(): void {

  }

}
