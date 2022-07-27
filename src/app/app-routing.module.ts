import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentListComponent} from "./student/student-list/student-list.component";
import {StudentCreateComponent} from "./student/student-create/student-create.component";
import {StudentDetailComponent} from "./student/student-detail/student-detail.component";

const routes: Routes = [
  {
    path: '',
    component:StudentListComponent
  },
  {
    path:'create',
    component:StudentCreateComponent,
  },
  {
  path:'show-detail',
    component:StudentDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
