import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnvaccinatedVaccinePageRoutingModule } from './unvaccinated-vaccine-routing.module';

import { UnvaccinatedVaccinePage } from './unvaccinated-vaccine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnvaccinatedVaccinePageRoutingModule
  ],
  declarations: [UnvaccinatedVaccinePage]
})
export class UnvaccinatedVaccinePageModule {}
