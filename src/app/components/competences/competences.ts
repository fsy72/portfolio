import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-competences',
  imports: [
    CommonModule
  ],
  templateUrl: './competences.html',
  styleUrl: './competences.css',
})
export class Competences {
  readonly langages = [
    { 'competence':'C / C++', 'niveau':88 },
    { 'competence':'Java', 'niveau':70 },
    { 'competence':'Python', 'niveau':70 },
    { 'competence':'SQL', 'niveau':90 },
    { 'competence':'Dart / Flutter', 'niveau':65 },
    { 'competence':'Lisp', 'niveau':60 },
  ];

  readonly webOutils = [
    { 'competence':'HTML / CSS / JavaScript', 'niveau':90 },
    { 'competence':'Spring boot', 'niveau':70 },
    { 'competence':'PHP / Laravel', 'niveau':90 },
    { 'competence':'Node.js / Socket.IO', 'niveau':70 },
    { 'competence':'React / Angular / jQuery', 'niveau':75 },
    { 'competence':'Git / Linux / VS Code', 'niveau':82 },
  ];


  getNiveau(niveau: number) {
    if(niveau > 70)
        return 'Avancé';

    return 'intermédaire';
  }
}
