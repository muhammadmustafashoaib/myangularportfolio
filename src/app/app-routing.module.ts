import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCompiledComponent } from './Components/dashboard-compiled/dashboard-compiled.component';
import { FormComponent } from './Components/form/form.component';
import { ReactiveFormComponent } from './Components/reactive-form/reactive-form.component';
import { SignupComponent } from './Components/signup/signup.component';
import { LoginComponent } from './Components/login/login.component';
import { CompiledreactiveComponent } from './Components/compiledreactive/compiledreactive.component';
import { CompiledTemplateComponent } from './Components/compiled-template/compiled-template.component';
import { SalescompleteComponent } from './Components/salescomplete/salescomplete.component';
import { SalesListComponent } from './Components/sales-list/sales-list.component';
import { SalesAddcompComponent } from './Components/sales-addcomp/sales-addcomp.component';
import { NewtaskComponent } from './Components/newtask/newtask.component';
import { HomeComponent } from './Components/home/home.component';
import { FaqsComponent } from './Components/faqs/faqs.component';
import { authGuard } from './auth.guard';
import { ProposalsComponent } from './Components/proposals/proposals.component';
    const routes: Routes = [
      { 
        path: 'dashboard',
        component: DashboardCompiledComponent,
        canActivate: [authGuard]
      },
        { path: 'overview', component: NewtaskComponent },
        { path: 'form', component: CompiledreactiveComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent},
      { path: 'yourdetails', component: CompiledTemplateComponent },
      { path: 'sales', component: SalescompleteComponent },
      { path: 'sales-add', component: SalesAddcompComponent},
      { path: 'faqs', component: FaqsComponent },
      {path:'investmentproposal', component: ProposalsComponent },
      
      { path: '', redirectTo: '/login', pathMatch: 'full' }
    ];
    
  
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
