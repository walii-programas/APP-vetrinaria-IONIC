import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Pet } from 'src/app/global/interfaces/pet.interface';
import { dataPetVaccinationCardAndDetail } from '../interfaces/dataPetVaccinationCardAndDetail.interface';
import { PetService } from '../services/pet.service';
import { PetVaccinationCardService } from '../services/petVaccinationCard.service';
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-pet-vaccination-card',
  templateUrl: './pet-vaccination-card.page.html',
  styleUrls: ['./pet-vaccination-card.page.scss'],
})
export class PetVaccinationCardPage implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private petService: PetService,
    private petVaccinationCardService: PetVaccinationCardService,
    private datePipe: DatePipe,
    private loadingController: LoadingController
  ) {
    this.idPet = this.activatedRoute.snapshot.paramMap.get('id');
    this.getPet();
  }

  async ngOnInit(): Promise<void> {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 5000
    });
    // get simple services
    this.getPetVaccinationCardByPet();
  }

  /* UI */
  // variables
  idPet: string;
  pet: Pet;
  petVaccinationCardsAndDetails: dataPetVaccinationCardAndDetail[];
  loading: any;

  // methods
  getPet() {
    this.petService.getPet(this.idPet).subscribe((res) => {
      // console.log(res);
      this.pet = res['data'];
    }, (err) => {
      console.log(err);
    });
  }

  async getPetVaccinationCardByPet() {
    await this.loading.present();
    this.petVaccinationCardService.getVaccinationCardByPet(this.idPet).subscribe((res) => {
      // console.log(res);
      res['data'].forEach(pvc => {
        pvc.petVaccinationCard.date = this.datePipe.transform(pvc.petVaccinationCard.date, "EEEE, dd 'de' MMMM 'del' y");
        pvc.vaccines.forEach(vaccine => {
          vaccine.pivot.date = this.datePipe.transform(vaccine.pivot.date, "EEEE, dd 'de' MMMM 'del' y")
        });
      });
      this.loading.dismiss();
      this.petVaccinationCardsAndDetails = res['data'];
      // console.log(this.petVaccinationCardsAndDetails);
    }, (err) => {
      console.log(err);
      this.loading.dismiss();
    });
  }

  backToPets() {
    this.location.back();
  }

}
