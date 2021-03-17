import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private _loginService: LoginService, private _router: Router) {}

  ngOnInit(): void {}

  logout() {
    if (confirm('Are you sure you want to logout')) {
      this._loginService.signOut();
      this._router.navigate(['']);
    }
  }
}
