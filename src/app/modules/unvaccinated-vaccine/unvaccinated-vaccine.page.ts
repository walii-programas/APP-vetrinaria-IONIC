import { Component, OnInit } from '@angular/core';
import { DatePipe } from "@angular/common";
import { dataUnvaccinatedVaccines } from './interfaces/dataUnvaccinatedVaccines.interface';
import { UnvaccinatedVaccineService } from './services/unvaccinated-vaccine.service';
import { LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-unvaccinated-vaccine',
  templateUrl: './unvaccinated-vaccine.page.html',
  styleUrls: ['./unvaccinated-vaccine.page.scss'],
})
export class UnvaccinatedVaccinePage implements OnInit {

  constructor(
    private unvaccinatedVaccineService: UnvaccinatedVaccineService,
    private datePipe: DatePipe,
    private loadingController: LoadingController
  ) {
    // this.getUnvaccinatedVaccines();
  }

  async ngOnInit(): Promise<void> {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 5000
    });
    this.getUnvaccinatedVaccines();
  }

  /* UI */
  // variables
  unvaccinatedVaccines: dataUnvaccinatedVaccines[];
  loading: any;

  // methods
  async getUnvaccinatedVaccines() {
    this.loading.present();
    this.unvaccinatedVaccineService.getUnvaccinatedVaccinesByClient().subscribe((res) => {
      // console.log(res);
      res['data'].forEach(uVaccine => {
        uVaccine.pet_vaccination_card_vaccine_date = this.datePipe.transform(uVaccine.pet_vaccination_card_vaccine_date, "EEEE, dd 'de' MMMM 'del' y");
      });
      this.loading.dismiss();
      this.unvaccinatedVaccines = res['data'];
    }, (err) => {
      this.loading.dismiss();
      console.log(err);
    });
  }

}
