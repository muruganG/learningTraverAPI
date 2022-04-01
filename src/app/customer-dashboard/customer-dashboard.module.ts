import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerDashboardComponent } from './customer-dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';



@NgModule({
  declarations: [
    CustomerDashboardComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CustomerDashboardComponent
  ]
})
export class CustomerDashboardModule { }
