import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentListResponseModel } from '../model/student-list-response-model';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent {

  studentList:Array<StudentListResponseModel>=new Array<StudentListResponseModel>
  constructor(
    private router: Router,
    private studentSevice:StudentService
  
  ) { }

  ngOnInit(): void {
    this.listAllStudents();
  }

listAllStudents(){
this.studentSevice.listStudents().subscribe(
  (response:any)=>{
    this.studentList = response?.users;
    console.log("student list success",response)
  },
  (error:any)=>{
    console.log("Error on listing  students")
  }
)
}
onAddNewStudent(){
this.router.navigate(['/add-student'])
}
}