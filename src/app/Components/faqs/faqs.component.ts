import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit{
  
  constructor(private title:Title){}
  ngOnInit(): void {
    this.title.setTitle('FAQS');

  }
  faqs = [
   
    {
      question: 'How secure is my data and investment on Rica?',
      answer: 'We use end-to-end encryption and industry-standard security protocols to ensure your personal information and financial data are always protected.'
    },
    {
      question: 'Do I need a bank account to invest through Rica?',
      answer: 'Yes, a valid bank account is required to link your funds for investments and withdrawals securely.'
    },
    {
      question: 'What fees or charges should I be aware of?',
      answer: 'Rica has transparent pricing. You’ll be notified of any transaction fees or service charges before you confirm an action.'
    },
    {
      question: 'Can I track my investment performance in real-time?',
      answer: 'Yes, your dashboard offers real-time updates, charts, and summaries so you can monitor your investment growth easily.'
    },
    {
      question: 'Is customer support available if I face issues?',
      answer: 'Of course! Our support team is available 24/7 via live chat, email, and phone to assist you with any queries or concerns.'
    },
    {
      question: 'Can I withdraw my investment anytime?',
      answer: 'Most investments can be withdrawn depending on the type and maturity. You’ll always be informed of any lock-in periods.'
    }
  ];
  
  
  openAccordionId: number | null = null;
  
  toogleAccordion(id: number): void {
    this.openAccordionId = this.openAccordionId === id ? null : id;
  }
  

}
