import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAdoptionapplicationsComponent } from './show-adoptionapplications.component';

describe('ShowAdoptionapplicationsComponent', () => {
  let component: ShowAdoptionapplicationsComponent;
  let fixture: ComponentFixture<ShowAdoptionapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAdoptionapplicationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAdoptionapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
