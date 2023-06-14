import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import { GestionDepenseComponent } from './gestion-depense/gestion-depense.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RouterModule, Routes } from '@angular/router';
//import { routes } from './routes';
import routes from "./routes"

@NgModule({
  exports: [],
    declarations: [
        AppComponent,
        CalendarComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
RouterModule.forRoot(routes),
        BrowserModule,
        HomeComponent,
        GestionDepenseComponent,
    ]
})


export class AppModule { }
