import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetSimpleServicePage } from './pet-simple-service.page';

const routes: Routes = [
  {
    path: '',
    component: PetSimpleServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetSimpleServicePageRoutingModule {}
