import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAdoptionapplicationComponent } from './check-adoptionapplication.component';

describe('CheckAdoptionapplicationComponent', () => {
  let component: CheckAdoptionapplicationComponent;
  let fixture: ComponentFixture<CheckAdoptionapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAdoptionapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckAdoptionapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
