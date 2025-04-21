import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-salescomplete',
  templateUrl: './salescomplete.component.html',
  styleUrls: ['./salescomplete.component.css']
})
export class SalescompleteComponent implements OnInit {
constructor(private title:Title){}
  ngOnInit(): void {
    this.title.setTitle('Sales');

  }
}
