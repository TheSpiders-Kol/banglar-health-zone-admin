import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditInsuranceCompanyComponent } from './edit-insurance-company.component';

describe('EditInsuranceCompanyComponent', () => {
  let component: EditInsuranceCompanyComponent;
  let fixture: ComponentFixture<EditInsuranceCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditInsuranceCompanyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditInsuranceCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
