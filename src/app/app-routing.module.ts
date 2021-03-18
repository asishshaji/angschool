import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/authentication/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'enrollment',
    component: EnrollmentComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard],
  },

  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'school',
    loadChildren: () =>
      import('./angularschool/angularschool.module').then(
        (m) => m.AngularschoolModule
      ),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
