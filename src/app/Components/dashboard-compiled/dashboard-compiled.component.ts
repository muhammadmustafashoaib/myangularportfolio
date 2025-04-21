import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-dashboard-compiled',
  templateUrl: './dashboard-compiled.component.html',
  styleUrls: ['./dashboard-compiled.component.css'],
})
export class DashboardCompiledComponent implements OnInit {
  users: any[] = [];
  constructor(private http: HttpClient, private title: Title) {
    this.loadUsers();
  }
  ngOnInit(): void {
    this.title.setTitle('Dashboard');
  }

  loadUsers() {
    console.log('dashboard opened');
  }
  isSidebarOpen = false;

toggleSidebar() {
  this.isSidebarOpen = !this.isSidebarOpen;}
}
