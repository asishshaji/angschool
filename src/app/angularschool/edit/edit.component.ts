import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _service: SchoolService,
    private _router: Router
  ) {}

  id: any;
  school: any;

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((res) => {
      this.id = Number(res.get('id'));
    });

    this._service.getRecordById(this.id).subscribe((res) => {
      this.school = { ...res };
    });
  }

  submitBranch() {
    this._service.editRecord(this.school).subscribe(() => {
      this._router.navigate(['school']);
    });
  }
}
