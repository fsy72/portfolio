import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  imports: [ CommonModule ],
  templateUrl: './projets.html',
  styleUrl: './projets.css',
})
export class Projets {
  readonly projets = [
    {
      'nameProject':'FieldTask Pro',
      'image':'images/fieldtask_pro.svg',
      'hrefExplore':'#',
      'hrefGithub':'https://github.com/fsy72/fieldtask-pro',
      'description':'FieldTask Pro est le prototype d\'une application mobile cross-platform destinée aux techniciens itinérants de TechFix.',
      'outils':[ 'Laravel', 'Flutter' ]
    },
    {
      'nameProject':'Projets Tutorés',
      'image':'images/projets_tutores.png',
      'hrefExplore':'#',
      'hrefGithub':'https://github.com/fsy72/projets_tutores',
      'description':'Application web de gestion des projets tutorés. Elle permet aux enseignants de proposer des sujets, aux étudiants de candidater, et au responsable pédagogique d\'accepter ou de rejeter les candidatures.',
      'outils':[ 'Spring Boot', 'Angular' ]
    },
    {
      'nameProject':'Gestion pédagogique UGB',
      'image':'https://raw.githubusercontent.com/fsy72/ng-gestion-pedagogique/main/public/assets/tableau-de-bord.png',
      'hrefExplore':'https://ng-gestion-pedagogique.vercel.app',
      'hrefGithub':'https://github.com/fsy72/ng-gestion-pedagogique',
      'description':'Application web de gestion pédagogique avec authentification, notifications et tableau de bord.',
      'outils':[ 'Angular', 'TypeScript' ]
    },
    {
      'nameProject':'Classification d’articles de presse',
      'image':'https://raw.githubusercontent.com/fsy72/classification_automatique_articles_de_presse/main/confusion_matrices_comparaison.png',
      'hrefExplore':'#',
      'hrefGithub':'https://github.com/fsy72/classification_automatique_articles_de_presse',
      'description':'Pipeline de text mining qui classe des articles BBC en cinq catégories et compare Naive Bayes à un SVM linéaire.',
      'outils':[ 'Python', 'scikit-learn', 'NLTK', 'TF-IDF' ]
    }
  ];
}
