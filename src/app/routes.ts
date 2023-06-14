import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GestionDepenseComponent } from './gestion-depense/gestion-depense.component';
const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'gestion-depense',
    component: GestionDepenseComponent,
    title: 'Home details'
  }
];

export default routeConfig;
