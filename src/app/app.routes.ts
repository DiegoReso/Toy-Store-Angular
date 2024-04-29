import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListCardsComponent } from './components/list-cards/list-cards.component';
import { inject } from '@angular/core';
import { ToysService } from './services/toys.service';



export const routes: Routes = [
  {
  path: '',
  component: ListCardsComponent
  },
  {
    path: 'create-toy',
    loadComponent: () => import ('./components/create/create.component').then(m => m.CreateComponent )    
  },
  {
    path: 'edit-toy/:id',
    resolve: {
      toy: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
       const toysService =  inject(ToysService)
       return toysService.get(route.paramMap.get('id') as string)
      }
    },
    loadComponent: () => import ('./components/edit/edit.component').then(m => m.EditComponent)
  }
];
