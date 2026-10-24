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
      'image':'fieldtask_pro.svg',
      'hrefExplore':'#',
      'hrefGithub':'https://github.com/fsy72/fieldtask-pro.git',
      'description':'FieldTask Pro est le prototype d\'une application mobile cross-platform destinée aux techniciens itinérants de TechFix.',
      'outils':[ 'Laravel', 'Flutter' ]
    },
    {
      'nameProject':'Projets Tutorés',
      'image':'projets_tutores.png',
      'hrefExplore':'#',
      'hrefGithub':'https://github.com/fsy72/projets_tutores.git',
      'description':'Application web de gestion des projets tutorés. Elle permet aux enseignants de proposer des sujets, aux étudiants de candidater, et au responsable pédagogique d\'accepter ou de rejeter les candidatures. ',
      'outils':[ 'Spring Boot', 'Angular' ]
    },
    {
      'nameProject':'Analytics Dashboard',
      'image':'anime4.jpg',
      'hrefExplore':'#',
      'hrefGithub':'#',
      'description':'Dashboard de visualisation de données en temps réel avec graphiques interactifs.',
      'outils':[ 'React', 'GraphQL', 'D3.js' ]
    },
    {
      'nameProject':'Social Network API',
      'image':'anime1.jpg',
      'hrefExplore':'#',
      'hrefGithub':'#',
      'description':'API REST robuste pour un réseau social avec authentification JWT et WebSockets.',
      'outils':[ 'Node.js', 'MongoDB', 'Redis' ]
    },
    {
      'nameProject':'Mobile Fitness App',
      'image':'anime2.jpg',
      'hrefExplore':'#',
      'hrefGithub':'#',
      'description':'Application mobile de suivi fitness avec IA pour les recommandations personnalisées.',
      'outils':[ 'React Native', 'Python', 'TensorFlow' ]
    },
    {
      'nameProject':'Blog CMS Platform',
      'image':'anime3.jpg',
      'hrefExplore':'#',
      'hrefGithub':'#',
      'description':'CMS headless moderne avec éditeur riche,SEO intégré et CDN global.',
      'outils':[ 'Next.js', 'Sanity', 'Vercel' ]
    }
  ];
}
