import { Component } from '@angular/core';

@Component({
  selector: 'app-invest-in-steps',
  templateUrl: './invest-in-steps.component.html',
  styleUrls: ['./invest-in-steps.component.css']
})
export class InvestInStepsComponent {
  
  openAccordionId:number | null = null

  toogleAccordion(id:number){
   // this.isOpen= !this.isOpen
   this.openAccordionId = this.openAccordionId === id ? null : id; // Toggle current accordion

  }
}
