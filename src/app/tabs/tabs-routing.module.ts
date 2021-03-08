import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pets',
        loadChildren: () => import('../modules/pet/pet.module').then(m => m.PetPageModule)
      },
      {
        path: 'unvaccinated-vaccines',
        loadChildren: () => import('../modules/unvaccinated-vaccine/unvaccinated-vaccine.module').then(m => m.UnvaccinatedVaccinePageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../modules/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/pets',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
