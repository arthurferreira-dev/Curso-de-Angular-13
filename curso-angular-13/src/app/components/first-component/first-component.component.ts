import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  date: Date = new Date();
  year = this.date.getFullYear();

  name: string = 'Arthur Ferreira';
  age: number = this.year - 2012;
  desc = 'Programador em Formação (Front-End)';

  constructor() {}

  ngOnInit(): void {}
}