import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHealthServiceComponent } from './edit-health-service.component';

describe('EditHealthServiceComponent', () => {
  let component: EditHealthServiceComponent;
  let fixture: ComponentFixture<EditHealthServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHealthServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHealthServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
