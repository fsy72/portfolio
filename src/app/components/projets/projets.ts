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
      'nameProject':'E-Commerce Platform',
      'image':'img1.jpg',
      'hrefExplore':'#',
      'hrefGithub':'#',
      'description':'Plateforme e-commerce complète avec paiement intégré et dashboard admin.',
      'outils':[ 'Node.js', 'MongoDB', 'React' ]
    },
    {
      'nameProject':'Task Management App',
      'image':'anime5.png',
      'hrefExplore':'#',
      'hrefGithub':'#',
      'description':'Application de gestion de tâches collaborative avec temps réel.',
      'outils':[ 'Vue.js', 'Firebase', 'Tailwind' ]
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
