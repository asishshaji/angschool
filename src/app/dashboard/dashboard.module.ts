import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditComponent } from './edit/edit.component';
import { AddComponent } from './add/add.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalModule } from 'ngx-bootstrap/modal';
import { OrderModule } from 'ngx-order-pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent, EditComponent, AddComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    OrderModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ]
})
export class DashboardModule { }
