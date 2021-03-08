import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetSimpleServicePageRoutingModule } from './pet-simple-service-routing.module';

import { PetSimpleServicePage } from './pet-simple-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetSimpleServicePageRoutingModule
  ],
  declarations: [PetSimpleServicePage]
})
export class PetSimpleServicePageModule {}
