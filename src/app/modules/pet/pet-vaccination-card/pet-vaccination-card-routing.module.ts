import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetVaccinationCardPage } from './pet-vaccination-card.page';

const routes: Routes = [
  {
    path: '',
    component: PetVaccinationCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetVaccinationCardPageRoutingModule {}
