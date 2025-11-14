import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  date: Date = new Date();
  year: number = this.date.getFullYear();
  
  userName = "Albertum"
  userAge = 45
  userBirth = this.year - this.userAge
  userData = {
    email: "albertum@hotmail.com",
    role: "user"
  }

  title = 'Curso Angular 13';
}