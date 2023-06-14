import { Component } from '@angular/core';
import { HomeComponent  } from './home/home.component';
import { GestionDepenseComponent } from './gestion-depense/gestion-depense.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ItemCalendar } from './item-calendar';
import { RouterModule } from '@angular/router';

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
    <router-outlet></router-outlet>
    </section>
  </main>`,})

  export class AppComponent {
  title = 'The worrisome optimist';
  loca:ItemCalendar={
    date: 21122023,
    full: true,
    activity: 'loca golf'
  }
}

imports:[
  HomeComponent,
  GestionDepenseComponent,
  CalendarComponent,
  RouterModule,
]

