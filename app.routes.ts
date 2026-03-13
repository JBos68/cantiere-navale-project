import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell.component';

export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent) },
      { path: 'imbarcazioni', loadComponent: () => import('./features/imbarcazioni/imbarcazioni.component').then(m => m.ImbarcazioniComponent) },
      { path: 'ordini', loadComponent: () => import('./features/ordini/ordini.component').then(m => m.OrdiniComponent) },
      { path: 'clienti', loadComponent: () => import('./features/clienti/clienti.component').then(m => m.ClientiComponent) },
      { path: 'produzione', loadComponent: () => import('./features/produzione/produzione.component').then(m => m.ProduzioneComponent) },
      { path: 'magazzino', loadComponent: () => import('./features/magazzino/magazzino.component').then(m => m.MagazzinoComponent) },
      { path: 'fornitori', loadComponent: () => import('./features/fornitori/fornitori.component').then(m => m.FornitoriComponent) },
      { path: 'personale', loadComponent: () => import('./features/personale/personale.component').then(m => m.PersonaleComponent) },
    ]
  }
];
