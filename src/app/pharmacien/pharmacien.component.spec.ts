import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacienComponent } from './pharmacien.component';

describe('PharmacienComponent', () => {
  let component: PharmacienComponent;
  let fixture: ComponentFixture<PharmacienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
