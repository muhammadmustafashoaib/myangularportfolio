import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-compiled-template',
  templateUrl: './compiled-template.component.html',
  styleUrls: ['./compiled-template.component.css']
})
export class CompiledTemplateComponent implements OnInit {
  constructor(private title: Title){}

  ngOnInit(): void {
    this.title.setTitle('Your Details');
  }
  showSidebar = false;

  toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
