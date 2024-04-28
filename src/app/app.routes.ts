import { Routes } from '@angular/router';

import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { CreateComponent } from './components/create/create.component';

export const routes: Routes = [
  {
  path: '',
  component: ListCardsComponent
  },
  {
    path: 'create-toy',
    loadComponent: () => import ('./components/create/create.component').then(m => m.CreateComponent )    
  }
];
