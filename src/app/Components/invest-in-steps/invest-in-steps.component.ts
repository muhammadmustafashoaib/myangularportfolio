import { Component } from '@angular/core';

@Component({
  selector: 'app-invest-in-steps',
  templateUrl: './invest-in-steps.component.html',
  styleUrls: ['./invest-in-steps.component.css']
})
export class InvestInStepsComponent {
  
openAccordionId: number | null = null;

toogleAccordion(id: number) {
  this.openAccordionId = this.openAccordionId === id ? null : id;
}

steps = [
  {
    id: 1,
    title: 'Browse Live & Upcoming IPOs',
    description:
      'Get detailed insights into IPOs curated and presented through our platform.',
  },
  {
    id: 2,
    title: 'Generate Your Investor Number',
    description:
      'Start your IPO journey with ease by registering your National Investor Number.',
  },
  {
    id: 3,
    title: 'Make Your Investment',
    description:
      'Choose your desired IPO and place your investment directly through the platform.',
  },
  {
    id: 4,
    title: 'Monitor Your Portfolio',
    description:
      'Track your investments and portfolio performance in real time.',
  },
];
}
