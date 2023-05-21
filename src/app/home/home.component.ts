import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GestionDepenseComponent } from './../gestion-depense/gestion-depense.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GestionDepenseComponent, RouterOutlet],
  template: `
  <main>
  <section class="ArticleMainpage">
		<h2>Ajouter une dépense</h2>
		<article class="articleHomepage" >
    <router-outlet><a href="./depense/">depense</a></router-outlet>
			<div> </div>
		</article>


		<h2>Depense du mois</h2>
		<article class="articleHomepage">
    		<div><img src="Calendrier_date.png" title="titre-article" alt="imageRepresentantArticle" class="pictureArticle"></div>
		</article>

	</section>

	<aside class="AsideHomepage">
		<h2 class="titleAside">Budget mensuel</h2>
		<article class="Goal">Vous avez dépensé ??? € ce mois ci.
			<div><img src="Budget_prevision.png" title="titre-article" alt="imageRepresentantArticle" class="pictureArticle"></div>
		</article>



	</aside>
  </main>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}

imports: [
  CommonModule,
  GestionDepenseComponent,
]
