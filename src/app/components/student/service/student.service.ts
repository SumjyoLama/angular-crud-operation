import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StudentListResponseModel } from '../model/student-list-response-model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
  studentApiEndPoint:string='users'
  baseUrl:string = environment.baseUrl;

  constructor(
    private httpClient:HttpClient

  ) { }
  saveStudent(student:any):Observable<StudentListResponseModel[]>{
    return this.httpClient.post<StudentListResponseModel[]>(
      this.baseUrl.concat(this.studentApiEndPoint),student
    )
  }
  listStudents():Observable<StudentListResponseModel[]>{
    return this.httpClient.get<StudentListResponseModel[]>(
this.baseUrl.concat(this.studentApiEndPoint)
    )
  }
}
