import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  constructor(
    private _courseService: CoursesService,
    private _modalService: BsModalService,
    private _router: Router
  ) {}

  Courses: any = [];
  p: number = 1;
  term = '';

  order: string = 'name';
  orderBool: boolean = false;

  modalRef: any;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template);
  }

  changeOrder(val: string) {
    this.order = val;
    this.orderBool = !this.orderBool;
  }
  hangeOrder(val: any) {}

  fetchData() {
    this.Courses = this._courseService.getCourses().subscribe((res) => {
      this.Courses = res;
    });
  }

  deleteRecord(id: any) {
    if (confirm('Are you sure?')) {
      this._courseService.deleteRecord(id).subscribe(() => {
        this.fetchData();
      });
    }
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
