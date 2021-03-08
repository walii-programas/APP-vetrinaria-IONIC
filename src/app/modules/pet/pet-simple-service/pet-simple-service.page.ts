import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Pet } from 'src/app/global/interfaces/pet.interface';
import { DataSimpleServices } from '../interfaces/dataSimpleService.interface';
import { PetService } from '../services/pet.service';
import { PetSimpleService } from '../services/petSimpleService.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pet-simple-service',
  templateUrl: './pet-simple-service.page.html',
  styleUrls: ['./pet-simple-service.page.scss'],
})
export class PetSimpleServicePage implements OnInit {

  constructor(
    private petSimpleService: PetSimpleService,
    private activatedRoute: ActivatedRoute,
    private petService: PetService,
    private datePipe: DatePipe,
    private location: Location,
    private loadingController: LoadingController
  ) {
    // get id pet
    this.idPet = this.activatedRoute.snapshot.paramMap.get('id');
    // get pet
    this.getPet();
  }

  async ngOnInit(): Promise<void> {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 5000
    });
    // get simple services
    this.getSimpleServicesByPet();
  }

  /* UI */
  // variables
  idPet: string;
  pet: Pet = undefined;
  simpleServices: DataSimpleServices[];
  loading: any;

  // methods
  async getSimpleServicesByPet() {
    this.loading.present();
    this.petSimpleService.getSimpleSericesByPet(this.idPet).subscribe((res) => {
      // console.log(res);
      res['data'].forEach(pss => {
        pss.simpleService.date = this.datePipe.transform(pss.simpleService.date, "EEEE, dd 'de' MMMM 'del' y, h:mm a");
      });
      this.simpleServices = res['data'];
      this.loading.dismiss();
    }, (err) => {
      console.log(err);
      this.loading.dismiss();
    });
  }

  getPet() {
    this.petService.getPet(this.idPet).subscribe((res) => {
      // console.log(res);
      this.pet = res['data'];
    }, (err) => {
      console.log(err);
    });
  }

  backToPets() {
    this.location.back();
  }

}
