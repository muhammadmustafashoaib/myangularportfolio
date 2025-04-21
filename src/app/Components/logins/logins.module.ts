import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginsRoutingModule } from './logins-routing.module';
import { LoginsComponent } from './logins.component';


@NgModule({
  declarations: [
    LoginsComponent
  ],
  imports: [
    CommonModule,
    LoginsRoutingModule
  ]
})
export class LoginsModule { }
