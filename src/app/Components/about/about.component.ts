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

  bio = `I'm Mustafa — a frontend developer & UI UX Designer with a unique background in dietetics.

I started my career using tools like Cronometer and the USDA database to help people manage their nutrition. That hands-on experience with data and user-focused tools led me to explore web development.

Since then, I’ve worked on real-world Angular projects like Eureeca (Angular 16) and SalesAssist (Angular 11), combining structure, empathy, and clean UI into everything I build.`;

  experience = [
  {
    title: 'Angular Frontend Developer / UI-UX Designer',
    company: 'Raheem Solutions, Johar Town, Lahore',
    years: 'May 2024 – April 2025',
    details: `Built and maintained scalable Angular apps with modern UI using TypeScript, Tailwind CSS, Bootstrap, and PrimeNG. 
              Collaborated on wireframes, prototypes, and UI design improvements to enhance user experience, 
              focusing on accessibility, responsiveness, and intuitive interactions.`
  }
];
 technologies = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png' },
    { name: 'Figma', icon: 'https://images.icon-icons.com/2429/PNG/512/figma_logo_icon_147289.png' },
    { name: 'Adobe XD', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQslxEHF3BbfSbjjl97u0YqmCvyhyP-STxkpA&s' }
  ];
projects = [
  { 
    name: 'Calorie App', 
    description: 'Made using Tailwind CSS', 
    route: 'https://mustafacalorieapp.netlify.app/',  // internal route
    image: 'https://play-lh.googleusercontent.com/MhvfJAsoEvsESxp9AQg3KOwWyhRRAB1HJWlLCWmLnDucDC6bG81XsmwyVD1zbde1UZM',
    external: true
  },
  { 
    name: 'Investment App', 
    description: 'Made using Bootstrap, PrimeNG, SCSS', 
    route: 'https://mustafasangularportfolio.netlify.app/dashboard',  // external URL
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
