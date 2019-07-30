import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentSimpleComponent } from './medicament-simple.component';

describe('MedicamentSimpleComponent', () => {
  let component: MedicamentSimpleComponent;
  let fixture: ComponentFixture<MedicamentSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
