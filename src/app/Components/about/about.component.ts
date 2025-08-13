import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private router: Router) {}
name = 'Mustafa Shoaib';
photoUrl = 'https://avatars.githubusercontent.com/u/152904440?v=4';

  bio = `I'm Mustafa — a frontend developer with a unique background in dietetics.

I started my career using tools like Cronometer and the USDA database to help people manage their nutrition. That hands-on experience with data and user-focused tools led me to explore web development.

Since then, I’ve worked on real-world Angular projects like Eureeca (Angular 16) and SalesAssist (Angular 11), combining structure, empathy, and clean UI into everything I build.`;

  experience = [
 
    {
      title: 'Angular Frontend Developer',
      company: 'Raheem Solutions, Johar Town, Lahore',
      years: 'May 2024 – April 2025',
      details: 'Built and maintained scalable Angular apps with modern UI using TypeScript, Tailwind CSS, Bootstrap, and PrimeNG.'
    }
  ];

technologies = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png' },
  { name: 'PrimeNG', icon: 'data:image/png;base64,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' }
];

projects = [
  { 
    name: 'Calorie App', 
    description: 'Build on Angular 16, Tailwind CSS, TypeScript', 
    route: 'https://mustafacalorieapp.netlify.app/',  // internal route
    image: 'https://plus.unsplash.com/premium_photo-1707242995268-59f778c70390?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhbG9yaWUlMjBhcHB8ZW58MHx8MHx8fDA%3D',
    external: true
  },
  { 
    name: 'Investment App', 
    description: 'Made on Angular 11, Bootstrap, PrimeNG, TypeScript', 
    route: 'https://mustafasangularportfolio.netlify.app/',  // external URL
    image: 'https://plus.unsplash.com/premium_photo-1682310075673-b408eb1ca6fd?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    external: true
  }
];

goToProject(project: any) {
  if (project.external) {
    window.open(project.route, '_blank'); // open external URL in a new tab
  } else {
    this.router.navigate([project.route]); // navigate internally
  }
}

}
