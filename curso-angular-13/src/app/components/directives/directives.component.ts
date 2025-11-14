import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss'],
})
export class DirectivesComponent implements OnInit {
  sizeFont = '1.6';
  textAlign = 'center';
  classes = ['text-center color-red'];

  constructor() {}

  ngOnInit(): void {}
}