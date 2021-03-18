import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private _modalService: BsModalService,
    private _router: Router,
    private _service: SchoolService
  ) {}

  Schools: any = [];
  p: number = 1;
  term = '';

  order: string = 'id';
  orderBool: boolean = false;

  modalRef: any;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this._modalService.show(template);
  }

  changeOrder(val: string) {
    this.order = val;
    this.orderBool = !this.orderBool;
  }

  fetchData() {
    this.Schools = this._service.getSchools().subscribe((res) => {
      this.Schools = res;
    });
  }

  deleteRecord(id: any) {
    if (confirm('Are you sure?')) {
      this._service.deleteRecord(id).subscribe(() => {
        this.fetchData();
      });
    }
  }

  ngOnInit(): void {
    this.fetchData();
  }
}
