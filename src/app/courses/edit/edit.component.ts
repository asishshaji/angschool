import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _courseService: CoursesService,
    private _router: Router
  ) {}

  id: any;
  course: any;

  submitCourse() {
    console.log(this.course);
    this._courseService.editRecord(this.course).subscribe(() => {
      this._router.navigate(['courses']);
    });
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res) => {
      this.id = Number(res.get('id'));
    });

    this._courseService.getRecordById(this.id).subscribe((res) => {
      this.course = { ...res };
    });
  }
}
