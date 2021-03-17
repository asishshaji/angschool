import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { CoursesComponent } from './courses/courses.component';
import { CoursesRoutingModule } from './courses-routing.module';

import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddComponent, EditComponent, CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CoursesModule {}
