import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionDepenseComponent } from './gestion-depense/gestion-depense.component';


const routes: Routes = [
  { path: 'depense', component: GestionDepenseComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
