import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UnvaccinatedVaccinePage } from './unvaccinated-vaccine.page';

describe('UnvaccinatedVaccinePage', () => {
  let component: UnvaccinatedVaccinePage;
  let fixture: ComponentFixture<UnvaccinatedVaccinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnvaccinatedVaccinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UnvaccinatedVaccinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
