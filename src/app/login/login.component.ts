import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  uid: string = '';
  upass: string = '';
  stuData: any = [];
  constructor(private _loginService: LoginService, private _router: Router) {}

  ngOnInit(): void {}

  checkData() {
    this._loginService.getLoginCredential().subscribe((res) => {
      this.stuData = res;
      const data = this.stuData.filter(
        (d: any) => d.uid == this.uid && d.upass == this.upass
      );
      if (data.length > 0) {
        this._loginService.signIn(this.uid);
        this._router.navigate(['dashboard']);
      } else {
        alert('Invalid credentials');
        this.uid = '';
        this.upass = '';
      }
    });
  }
}
