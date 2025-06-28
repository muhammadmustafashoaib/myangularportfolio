import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
name = 'Mustafa Shoaib';
photoUrl = 'https://avatars.githubusercontent.com/u/152904440?v=4';

  bio = `I'm Mustafa — a frontend developer with a background in dietetics.

I started my career using tools like Cronometer and the USDA database to help people manage their nutrition. That hands-on experience with data and user-focused tools led me to explore web development.

Since then, I’ve worked on real-world Angular projects like Eureeca (Angular 16) and SalesAssist (Angular 11), combining structure, empathy, and clean UI into everything I build.`;

  experience = [
 
    {
      title: 'Angular Frontend Developer',
      company: 'Raheem Solutions, Johar Town, Lahore',
      years: 'May 2024 – April 2025',
      details: 'Built scalable Angular apps with modern UI using TypeScript, Tailwind, Bootstrap, and PrimeNG.'
    }
  ];

technologies = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'PrimeNG', icon: 'https://www.primefaces.org/wp-content/uploads/2020/05/primeng-svg.svg' },
];


  projects = [
    { name: 'Eureeca', version: 'Angular 16' },
    { name: 'SalesAssist', version: 'Angular 11' }
  ];
}
