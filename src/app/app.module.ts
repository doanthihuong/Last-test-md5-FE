import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentCreateComponent,
    StudentDeleteComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
