import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent {

  studentForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  isSubmitting: boolean | undefined;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private studentService: StudentService
  ) { }
  ngOnInit(): void {
    this.studentForm = this.formBuilder.group({
      name: [
        undefined,
        [
          Validators.required,
          Validators.maxLength(60),
          Validators.minLength(3),
          Validators.pattern('^[a-z A-Z]{3,60}$'),
        ],
      ],
      mobileNumber: [
        undefined,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: [
        undefined,
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{3,4}$'),
          Validators.maxLength(80),
          Validators.minLength(8),
        ],
      ],
      password: [undefined, Validators.required],
    });
  }
  get forms(): { [key: string]: AbstractControl } {
    return this.studentForm.controls;
  }
  onSendForm(student: any) {
    console.log(this.studentForm.value);
    this.studentService.saveStudent(student).subscribe(
      (response: any) => {
        console.log("Students added successfully.", response)
      },
      (error: any) => {
        console.log("Error on adding the data", error);
      }
    )
  }
}
