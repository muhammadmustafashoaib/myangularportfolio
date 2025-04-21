import { Component } from '@angular/core';

@Component({
  selector: 'app-access-ipo',
  templateUrl: './access-ipo.component.html',
  styleUrls: ['./access-ipo.component.css']
})
export class AccessIpoComponent {
  public timeOfDay: 'Morning' | 'Afternoon' | 'Evening' | 'Night' = 'Morning';


  public checkTimeOfDay() {
    const date = new Date();
    const hours = date.getHours();
    if (hours <= 4) {
      this.timeOfDay = 'Night';
    } else if (hours > 4 && hours <= 10) {
      this.timeOfDay = 'Morning';
    } else if (hours > 10 && hours <= 15) {
      this.timeOfDay = 'Afternoon';
    } else if (hours > 15 && hours <= 18) {
      this.timeOfDay = 'Evening';
    } else {
      this.timeOfDay = 'Night';
    }
  }
}
