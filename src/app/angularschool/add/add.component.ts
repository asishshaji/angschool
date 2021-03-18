import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from 'src/app/shared/services/school.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  lhBranch: any = '';

  constructor(private _service: SchoolService, private _router: Router) {}

  ngOnInit(): void {}

  submitBranch() {
    const branchObj = {
      lhBranch: this.lhBranch,
    };

    this._service.addRecord(branchObj).subscribe(() => {
      this._router.navigate(['school']);
    });
  }
}
