import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss'],
})
export class ParentDataComponent implements OnInit {
  date: Date = new Date();
  year: number = this.date.getFullYear();

  @Input() name!: string;
  @Input() age: number = 0;
  @Input() birth: number = this.year;
  @Input() data!: { email: string; role: string }

  constructor() {}

  ngOnInit(): void {}
}
