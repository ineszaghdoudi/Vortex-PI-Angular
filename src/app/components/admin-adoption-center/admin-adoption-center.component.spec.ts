import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAdoptionCenterComponent } from './admin-adoption-center.component';

describe('AdminAdoptionCenterComponent', () => {
  let component: AdminAdoptionCenterComponent;
  let fixture: ComponentFixture<AdminAdoptionCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAdoptionCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAdoptionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
