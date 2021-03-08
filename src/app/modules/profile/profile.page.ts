import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/global/interfaces/user.interface';
import { Router } from "@angular/router";
import { GlobalAuthService } from 'src/app/global/services/globalAuth.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router,
    private gAuthService: GlobalAuthService,
    private loadingController: LoadingController
  ) {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  async ngOnInit(): Promise<void> {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 5000
    });
  }

  /* UI */
  // variables
  user: User;
  loading: any;

  // methods
  async logout() {
    await this.loading.present();
    this.gAuthService.logout().subscribe((res) => {
      console.log(res);
      localStorage.clear();
      this.loading.dismiss();
      this.router.navigateByUrl('/login');
    }, (err) => {
      console.log(err);
      if (err.status == 401) {
        this.loading.dismiss();
        this.router.navigateByUrl('/login');
      }
    });
  }

}
