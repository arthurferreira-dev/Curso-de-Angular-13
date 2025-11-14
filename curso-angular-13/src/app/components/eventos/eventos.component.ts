import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  showElement: boolean = true;
  textElement: string = 'Esconda a mensagem!';

  constructor() {}

  ngOnInit(): void {}

  showMessage(): void {
    this.showElement = !this.showElement;
    if (this.showElement === false) {
      this.textElement = 'Mostre a mensagem!';
    } else {
      this.textElement = 'Esconda a mensagem!';
    }
  }
}