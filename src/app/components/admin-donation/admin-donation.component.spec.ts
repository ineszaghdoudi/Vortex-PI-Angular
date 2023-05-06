import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDonationComponent } from './admin-donation.component';

describe('AdminDonationComponent', () => {
  let component: AdminDonationComponent;
  let fixture: ComponentFixture<AdminDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDonationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
