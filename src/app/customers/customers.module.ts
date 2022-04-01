import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomerInviceComponent } from './customer-invice/customer-invice.component';
import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [
    CustomersComponent,
    CustomerInviceComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
