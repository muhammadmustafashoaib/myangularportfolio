import { Component, HostListener } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(private router: Router) {}

  menuItems = [
    { icon: 'https://www.svgrepo.com/show/501525/dashboard.svg', label: 'Dashboard', route: '/dashboard' },
    { icon: 'https://www.svgrepo.com/show/453478/statistics.svg', label: 'Overview', route: '/overview' },
    { icon: 'https://www.svgrepo.com/show/451234/register.svg', label: 'Registration Form', route: '/form' },
    { icon: 'https://www.svgrepo.com/show/334600/detail.svg', label: 'Investment Sectors', route: '/investmentproposal' },
    { icon: 'https://www.svgrepo.com/show/105745/faq.svg', label: 'FAQs', route: '/faqs' },
    { icon: 'https://www.svgrepo.com/show/482995/sales-up-graph.svg', label: 'Sales', route: '/sales' },
    { icon: 'https://www.svgrepo.com/show/334600/detail.svg', label: 'Business Listing', route: '/yourdetails' },

    { icon: 'https://www.svgrepo.com/show/520828/logout.svg', label: 'Logout' },
  ];

  showSidebar = false;
  isLargeScreen = false;

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy(): void {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize(): void {
    this.isLargeScreen = window.innerWidth >= 1024; // Tailwind's 'lg' breakpoint
    if (this.isLargeScreen) {
      this.showSidebar = false; // Optional: reset sidebar toggle on desktop
    }
  }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  handleMenuClick(item: any): void {
    this.onMenuItemClick(item);
    if (!this.isLargeScreen) {
      this.showSidebar = false;
    }
  }

  onMenuItemClick(item: any): void {
    if (item.label === 'Logout') {
      const confirmed = window.confirm('Are you sure you want to logout?');
      if (confirmed) {
        this.router.navigate(['/login']);
      }
    } else if (item.route) {
      this.router.navigate([item.route]);
    }
  }
}
