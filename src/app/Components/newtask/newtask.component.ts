import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Chart, ChartType } from 'chart.js';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit{
  constructor(private title: Title){}
  ngOnInit(): void {
    
    this.title.setTitle('Overview');
  }

}
