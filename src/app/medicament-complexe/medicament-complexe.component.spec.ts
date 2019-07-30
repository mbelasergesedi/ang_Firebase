import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentComplexeComponent } from './medicament-complexe.component';

describe('MedicamentComplexeComponent', () => {
  let component: MedicamentComplexeComponent;
  let fixture: ComponentFixture<MedicamentComplexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicamentComplexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicamentComplexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
