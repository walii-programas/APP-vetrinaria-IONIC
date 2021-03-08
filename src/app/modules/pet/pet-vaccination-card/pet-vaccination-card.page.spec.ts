import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetVaccinationCardPage } from './pet-vaccination-card.page';

describe('PetVaccinationCardPage', () => {
  let component: PetVaccinationCardPage;
  let fixture: ComponentFixture<PetVaccinationCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetVaccinationCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetVaccinationCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
