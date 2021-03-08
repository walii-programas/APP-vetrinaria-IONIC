import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from "./services/login.service";
import { GlobalAuthService } from "./../../global/services/globalAuth.service";
import { Login } from "./interfaces/login.interface";
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private gAuthServ: GlobalAuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {
    this.initFormLogin();
  }

  async ngOnInit(): Promise<void> {
    this.loading = await this.loadingController.create({
      message: 'Cargando...',
      duration: 5000
    });
  }

  /* API */
  // variables
  loginForm: FormGroup;

  // methods
  async login(dataLogin: Login) {
    await this.loading.present();
    this.loginService.login(dataLogin).subscribe((res) => {
      // console.log(res);
      if (res['client'] == true) {
        this.gAuthServ.calcExpiresIn(res['expires_in']);
        localStorage.setItem('expires_in', (this.gAuthServ.currentLoginStatus).toString());
        localStorage.setItem('token', res['access_token']);
        localStorage.setItem('idUser', res['user'].id);
        localStorage.setItem('user', JSON.stringify(res['user']));
        this.loading.dismiss();
        this.initFormLogin();
        this.router.navigateByUrl('/tabs/pets');
      } else {
        this.loading.dismiss();
        alert('Este usuario no está autorizado');
      }
      this.loading.dismiss();
    }, (err) => {
      console.log(err);
      this.loading.dismiss();
      alert('Credenciales incorrectas');
    });
  }

  /* UI */
  // variables
  loading: any;

  // methods
  initFormLogin() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required]]
    });
  }

}
