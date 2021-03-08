import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetHospitalizedServicePage } from './pet-hospitalized-service.page';

const routes: Routes = [
  {
    path: '',
    component: PetHospitalizedServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetHospitalizedServicePageRoutingModule {}
