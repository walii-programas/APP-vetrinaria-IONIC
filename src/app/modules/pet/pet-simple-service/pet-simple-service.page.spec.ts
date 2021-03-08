import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PetSimpleServicePage } from './pet-simple-service.page';

describe('PetSimpleServicePage', () => {
  let component: PetSimpleServicePage;
  let fixture: ComponentFixture<PetSimpleServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetSimpleServicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PetSimpleServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
