import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetVaccinationCardPageRoutingModule } from './pet-vaccination-card-routing.module';

import { PetVaccinationCardPage } from './pet-vaccination-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetVaccinationCardPageRoutingModule
  ],
  declarations: [PetVaccinationCardPage]
})
export class PetVaccinationCardPageModule {}
