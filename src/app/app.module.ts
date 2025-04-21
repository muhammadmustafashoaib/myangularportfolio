import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopUpComponent } from './Components/pop-up/pop-up.component';
import { AccessIpoComponent } from './Components/access-ipo/access-ipo.component';

import { InvestInStepsComponent } from './Components/invest-in-steps/invest-in-steps.component';
import { NinComponent } from './Components/nin/nin.component';
import { HowIpoWorksComponent } from './Components/how-ipo-works/how-ipo-works.component';
import { BenefitsComponent } from './Components/benefits/benefits.component';
import { FaqsComponent } from './Components/faqs/faqs.component';
import { IpoReviewsComponent } from './Components/ipo-reviews/ipo-reviews.component';
import { RequestNinComponent } from './Components/request-nin/request-nin.component';
import { NewtaskComponent } from './Components/newtask/newtask.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule } from '@angular/forms';
import { DashboardCompiledComponent } from './Components/dashboard-compiled/dashboard-compiled.component';
import { CustomeInterceptor } from './Services/custome.interceptor';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { FormComponent } from './Components/form/form.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { LoginSalesComponent } from './Components/login-sales/login-sales.component';
import { CompiledreactiveComponent } from './Components/compiledreactive/compiledreactive.component';
import { CompiledTemplateComponent } from './Components/compiled-template/compiled-template.component';
import { SalescompleteComponent } from './Components/salescomplete/salescomplete.component';
import { SalesAddComponent } from './Components/sales-add/sales-add.component';
import { SalesListComponent } from './Components/sales-list/sales-list.component';
import { SalesAddcompComponent } from './Components/sales-addcomp/sales-addcomp.component';
import { ProposalsComponent } from './Components/proposals/proposals.component';

@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent, 
    AccessIpoComponent,
    InvestInStepsComponent,
    NinComponent,
    HowIpoWorksComponent,
    BenefitsComponent,
    FaqsComponent,
    IpoReviewsComponent,
    RequestNinComponent,
    NewtaskComponent,
    DashboardCompiledComponent,
    
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ReactiveFormComponent,
    FormComponent,
    SidebarComponent,
    LoginSalesComponent,
    CompiledreactiveComponent,
    CompiledTemplateComponent,
    SalescompleteComponent,
    SalesAddComponent,
    SalesListComponent,
    SalesAddcompComponent,
    ProposalsComponent,

  
       
  ],
  imports: [
    HttpClientModule,//
    FormsModule,//
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CustomeInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
