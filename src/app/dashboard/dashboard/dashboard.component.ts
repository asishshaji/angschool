import { Component, OnInit,TemplateRef } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  StudentArray: any = [];
  p: number = 1;
  term = '';

  order: string = 'name';
  orderBool: boolean = false;

  modalRef: any;

  constructor(private _studentService: StudentService,private _modalService : BsModalService,private _router:Router) { }

  ngOnInit(): void {
    this.fetchData();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template);
  }

  changeOrder(val: string) {
    this.order = val;
    this.orderBool = !this.orderBool;

  }
  routeToEnrollment() {
    this._router.navigate(["enrollment"]);
  }

  fetchData() {
    this.StudentArray = this._studentService
    .getStudents()
    .subscribe((res) => {
      this.StudentArray = res;
    });
  }

  deleteRecord(id: any) {
    if (confirm("Are you sure?")) {
      this._studentService.deleteRecord(id).subscribe(() => {
        this.fetchData();
      });
    }

  }

}
