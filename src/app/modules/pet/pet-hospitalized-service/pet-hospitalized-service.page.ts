import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Pet } from 'src/app/global/interfaces/pet.interface';
import { DataHospitalizedService } from '../interfaces/dataHospitalizedServices.interface';
import { PetHospitalizedService } from '../services/petHospitalizedService.service';
import { PetService } from '../services/pet.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-pet-hospitalized-service',
  templateUrl: './pet-hospitalized-service.page.html',
  styleUrls: ['./pet-hospitalized-service.page.scss'],
})
export class PetHospitalizedServicePage implements OnInit {

  constructor(
    private petHospitalizedService: PetHospitalizedService,
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
    this.getHospitalizedServicesByPet();
  }

  /* UI */
  // variables
  idPet: string;
  pet: Pet = undefined;
  hospitalizedServices: DataHospitalizedService[];
  loading: any;

  // methods
  async getHospitalizedServicesByPet() {
    await this.loading.present();
    this.petHospitalizedService.getHospitalizedServicesByPet(this.idPet).subscribe((res) => {
      // console.log(res);
      res['data'].forEach(phs => {
        phs.hospitalizedService.date = this.datePipe.transform(phs.hospitalizedService.date, "EEEE, dd 'de' MMMM 'del' y, h:mm a");
        phs.hospitalizedService.updated_at = this.datePipe.transform(phs.hospitalizedService.updated_at, "EEEE, dd 'de' MMMM 'del' y, h:mm a");
      });
      this.hospitalizedServices = res['data'];
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
