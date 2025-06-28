import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  user = {
    name: 'Mustafa Shoaib',
    title: 'Web Designer | Frontend Developer | Angular',
    email: 'mustafashoaib2101@gmail.com',
    portfolioUrl: 'https://mustafasangularportfolio.netlify.app/',
    calendlyUrl: 'https://calendly.com/mustafashoaib2101',
    socials: {
      linkedin: 'https://www.linkedin.com/in/muhammadmustafashoaib',
      facebook: 'https://www.facebook.com/profile.php?id=61575993399370',
      twitter: 'https://x.com/mustafashoaib',
      github:'https://github.com/muhammadmustafashoaib'
    },
  };

  sendEmail() {
    window.open(`mailto:${this.user.email}`, '_blank');
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
