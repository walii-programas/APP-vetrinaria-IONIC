import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Pet } from '../../global/interfaces/pet.interface';
import { PetService } from './services/pet.service';
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.page.html',
  styleUrls: ['./pet.page.scss'],
})
export class PetPage implements OnInit {

  constructor(
    private petService: PetService,
    private datePipe: DatePipe,
    private loadingController: LoadingController
  ) {
    // this.getPets();
  }

  async ngOnInit(): Promise<void> {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 5000
    });
    this.getPets();
  }

  /* UI */
  // variables
  pets: Pet[];
  loading: any;
  
  // methods
  async getPets() {
    await this.loading.present();
    this.petService.getPetsByClient(localStorage.getItem('idUser')).subscribe((res) => {
      res['data'].forEach(pet => {
        pet.birthdate = this.datePipe.transform(pet.birthdate, "dd 'de' MMMM 'del' y")
      });
      this.loading.dismiss();
      this.pets = res['data'];
    }, (err) => {
      this.loading.dismiss();
      console.log(err);
    });
  }

}
