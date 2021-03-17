import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  courseName: any = '';
  constructor(
    private _courseService: CoursesService,
    private _router: Router
  ) {}

  submitCourse() {
    const courseObj = {
      courseName: this.courseName,
    };

    this._courseService.addRecord(courseObj).subscribe(() => {
      this._router.navigate(['courses']);
    });
  }

  ngOnInit(): void {}
}
