import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetPage } from './pet.page';

const routes: Routes = [
  {
    path: '',
    component: PetPage
  },
  {
    path: 'pet-hospitalized-service/:id',
    loadChildren: () => import('./pet-hospitalized-service/pet-hospitalized-service.module').then( m => m.PetHospitalizedServicePageModule)
  },
  {
    path: 'pet-simple-service/:id',
    loadChildren: () => import('./pet-simple-service/pet-simple-service.module').then( m => m.PetSimpleServicePageModule)
  },
  {
    path: 'pet-vaccination-card/:id',
    loadChildren: () => import('./pet-vaccination-card/pet-vaccination-card.module').then( m => m.PetVaccinationCardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetPageRoutingModule {}
