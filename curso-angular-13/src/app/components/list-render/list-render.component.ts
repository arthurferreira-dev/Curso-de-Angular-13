import { Component, OnInit } from '@angular/core';
import { Jobs } from 'src/app/Jobs';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.scss'],
})
export class ListRenderComponent implements OnInit {
  jobs: Jobs[] = [
    { name: 'Advogado', course: 'Direito', money: 4000 },
    { name: 'Programador', course: 'Ciência da Computação', money: 12000 },
    { name: 'Empresário', course: 'Nada', money: 17233 },
    { name: 'Pedreiro', course: 'Nada', money: 3554.2 },
    {
      name: 'CEO',
      course: 'Superior em Administração, Economia, Engenharia ou correlatas',
      money: 1000000,
    },
    { name: 'Cozinheiro', course: 'Tecnologia em Gastronomia', money: 3500 },
  ];

  constructor() {}

  ngOnInit(): void {}

  showMoneyJob = ''

  showMoney(job: Jobs) {
    this.showMoneyJob = `O ${job.name} ganha R$ ${job.money.toFixed(2)} por mês`
  }
}