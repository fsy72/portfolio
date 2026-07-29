import { Component, HostListener } from '@angular/core';
import { Footer } from '../components/footer/footer';
import { Accueil } from "../components/accueil/accueil";
import { Apropos } from "../components/apropos/apropos";
import { Projets } from "../components/projets/projets";
import { Competences } from "../components/competences/competences";
import { Contact } from "../components/contact/contact";

@Component({
  selector: 'app-portfolio',
  imports: [
    Accueil,
    Apropos,
    Projets,
    Competences,
    Contact,
    Footer
],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.css',
})
export class Portfolio {
  activeSectionId: string = 'accueil';
  readonly sectionIds = ['accueil', 'apropos', 'projets', 'competences', 'contact'];

  @HostListener('window:scroll')
  onWindowScroll(): void {
    let current = '';

    this.sectionIds.forEach(id => {
      const section = document.getElementById(id);
      if (section && window.scrollY >= section.offsetTop - 100) {
        current = id;
      }
    });

    this.activeSectionId = current;
  }

  // Helper appelé dans le template : isNavActive('apropos') → true/false
  isNavActive(sectionId: string): boolean {
    return this.activeSectionId === sectionId;
  }

  // ── SMOOTH SCROLL ──
  scrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
