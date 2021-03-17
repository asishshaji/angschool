import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angschool';
  constructor(public router:Router) {

  }

  routeTo(route: any) {
    console.log(route);

    this.router.navigate([route]);
  }
}
