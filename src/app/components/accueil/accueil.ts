import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accueil',
  imports: [],
  templateUrl: './accueil.html',
  styleUrl: './accueil.css',
})
export class Accueil {
  @Input() scrollTo!: (sectionId: string, event: Event) => void;
}
