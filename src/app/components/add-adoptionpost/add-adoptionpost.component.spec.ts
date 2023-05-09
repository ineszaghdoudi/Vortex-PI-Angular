import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdoptionpostComponent } from './add-adoptionpost.component';

describe('AddAdoptionpostComponent', () => {
  let component: AddAdoptionpostComponent;
  let fixture: ComponentFixture<AddAdoptionpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAdoptionpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdoptionpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
