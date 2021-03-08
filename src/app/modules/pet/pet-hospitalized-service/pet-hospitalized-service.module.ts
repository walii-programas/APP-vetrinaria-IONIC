import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetHospitalizedServicePageRoutingModule } from './pet-hospitalized-service-routing.module';

import { PetHospitalizedServicePage } from './pet-hospitalized-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetHospitalizedServicePageRoutingModule
  ],
  declarations: [PetHospitalizedServicePage]
})
export class PetHospitalizedServicePageModule {}
