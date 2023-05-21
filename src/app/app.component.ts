import { Component } from '@angular/core';
import { HomeComponent  } from './home/home.component';
import { GestionDepenseComponent } from './gestion-depense/gestion-depense.component';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="./barbie.png" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>

    </section>
  </main>`,})

  export class AppComponent {
  title = 'The worrisome optimist';
}

imports:[
  HomeComponent,
  GestionDepenseComponent,
]

