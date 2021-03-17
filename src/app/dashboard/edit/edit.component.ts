import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/shared/services/student.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  regexName,
  regexPhone,
  regexEmail,
} from 'src/app/shared/constants/constants';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: number = -1;
  stu: any;
  editForm: FormGroup;

  Qualifications: any = ['SSC', 'HSC', 'BSc', 'MSc', 'BCA', 'MCA'];

  Courses: any = ['ASD', 'ASD'];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _service: StudentService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res) => {
      this.id = Number(res.get('id'));
    });

    this._service.getRecordById(this.id).subscribe((res) => {
      this.stu = { ...res };

      console.log(this.stu.workExperience);

      this.editForm = new FormGroup({
        fullname: new FormControl(
          { value: this.stu.fullname, disabled: false },
          [Validators.pattern(regexName)]
        ),
        mobile: new FormControl({ value: this.stu.mobile, disabled: false }, [
          Validators.required,
          Validators.pattern(regexPhone),
        ]),
        email: new FormControl({ value: this.stu.email, disabled: false }, [
          Validators.required,
          Validators.pattern(regexEmail),
        ]),
        qualification: new FormControl(
          { value: this.stu.qualification, disabled: false },
          [Validators.required]
        ),
        passingYear: new FormControl(
          { value: this.stu.passingYear, disabled: false },
          Validators.required
        ),
        collegeName: new FormControl(
          { value: this.stu.collegeName, disabled: false },
          Validators.required
        ),
        city: new FormControl(
          { value: this.stu.city, disabled: false },
          Validators.required
        ),
        workExp: new FormControl(
          { value: this.stu.workExp, disabled: false },
          Validators.required
        ),
        course: new FormControl(
          { value: this.stu.course, disabled: false },
          Validators.required
        ),
        wdyh: new FormControl(
          { value: this.stu.wdyh, disabled: false },
          Validators.required
        ),
        batchType: new FormControl(
          { value: this.stu.batchType, disabled: false },
          Validators.required
        ),
      });
    });

  }

  editData() {
    const studObj = {
      id: this.id,
      fullname: this.editForm.get('fullname').value,
      mobile: this.editForm.get('mobile').value,
      email: this.editForm.get('email').value,
      qualification: this.editForm.get('qualification').value,
      passingYear: this.editForm.get('passingYear').value,
      collegeName: this.editForm.get('collegeName').value,
      city: this.editForm.get('city').value,
      workExp: this.editForm.get('workExp').value,
      course: this.editForm.get('course').value,
      wdyh: this.editForm.get('wdyh').value,
      batchType:this.editForm.get("batchType").value,
    };
    // console.log(studObj);

    this._service.editRecord(studObj).subscribe(() => {
      this._router.navigate(['dashboard']);
    });
  }
}
