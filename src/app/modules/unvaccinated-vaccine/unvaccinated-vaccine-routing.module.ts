import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnvaccinatedVaccinePage } from './unvaccinated-vaccine.page';

const routes: Routes = [
  {
    path: '',
    component: UnvaccinatedVaccinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnvaccinatedVaccinePageRoutingModule {}
