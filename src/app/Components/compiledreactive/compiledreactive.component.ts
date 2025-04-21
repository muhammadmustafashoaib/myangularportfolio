import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-compiledreactive',
  templateUrl: './compiledreactive.component.html',
  styleUrls: ['./compiledreactive.component.css']
})
export class CompiledreactiveComponent implements OnInit {

  constructor(private title: Title) { }
  ngOnInit(): void {
    this.title.setTitle('Registration Form');

  }
}
