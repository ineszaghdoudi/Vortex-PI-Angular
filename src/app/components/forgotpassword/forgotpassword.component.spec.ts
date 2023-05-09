import { ComponentFixture, TestBed } from '@angular/core/testing';

import { forgotpasswordComponent } from './forgotpassword.component';

describe('ForgotpasswordComponent', () => {
  let component: forgotpasswordComponent;
  let fixture: ComponentFixture<forgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ forgotpasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(forgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
