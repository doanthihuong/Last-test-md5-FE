import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {StudentService} from "../../sevice/student.service";
import {Student} from "../../model/student";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  form = new FormGroup( {
    name: new FormControl(''),
    description : new FormControl(''),
    action: new FormControl('')
  })
  obj:any;
  listStudent: Student[]=[];
  constructor(private httpClient: HttpClient,
              private router: Router,
              private studentService:StudentService) {
  }

  ngOnInit(): void {

  }
add(){
    console.log(this.form.value)
  this.obj={
      name:this.form.value.name,
      description:this.form.value.description,
      action:this.form.value.action,
  }

  this.studentService.save(this.obj).subscribe((data) => {
    alert("Them thanh cong");
    this.obj=data;
    this.router.navigate(['student'])
  },error=>{
    alert('Loi')
  })
}

}
