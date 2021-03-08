import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetHospitalizedServicePage } from './pet-hospitalized-service.page';

describe('PetHospitalizedServicePage', () => {
  let component: PetHospitalizedServicePage;
  let fixture: ComponentFixture<PetHospitalizedServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetHospitalizedServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetHospitalizedServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
