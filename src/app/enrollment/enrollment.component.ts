import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../shared/services/student.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  regexEmail,
  regexName,
  regexPhone,
} from '../shared/constants/constants';
@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css'],
})
export class EnrollmentComponent implements OnInit {
  constructor(
    private _router: Router,
    private _studentService: StudentService
  ) {}
  Qualifications: any = ['SSC', 'HSC', 'BSc', 'MSc', 'BCA', 'MCA'];

  Courses: any = ['ASD', 'ASD'];

  asd: string = 'asd';
  ngOnInit(): void {}

  form = new FormGroup({
    fullname: new FormControl('', [
      Validators.required,
      Validators.pattern(regexName),
    ]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern(regexPhone),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(regexEmail),
    ]),
    qualification: new FormControl('', [Validators.required]),
    passingYear: new FormControl('', Validators.required),
    collegeName: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    workExp: new FormControl('', Validators.required),
    course: new FormControl('', Validators.required),
    wdyh: new FormControl('', Validators.required),
    batchType: new FormControl('', Validators.required),
  });

  saveData() {
    console.log(this.form.value);

    const studObj = {
      fullName: this.form.get("fullname"),
      mobile: this.form.get("mobile"),
      email: this.form.get("email"),
      qualification: this.form.get("qualification"),
      yearOfPassing: this.form.get("passingYear"),
      clgName: this.form.get("collegeName"),
      city: this.form.get("city"),
      workExperience: this.form.get("workExp"),
      course: this.form.get("course"),
      whereDidYouHear: this.form.get("wdyh"),
      batchType:this.form.get("batchType"),
    };

    this._studentService.addRecord(this.form.value).subscribe(() => {
      this._router.navigate(["dashboard"]);
    });


  }
}
