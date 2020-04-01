import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionesTopComponent } from './profesiones-top.component';

describe('ProfesionesTopComponent', () => {
  let component: ProfesionesTopComponent;
  let fixture: ComponentFixture<ProfesionesTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionesTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionesTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
