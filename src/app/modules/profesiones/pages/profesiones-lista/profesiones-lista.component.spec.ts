import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionesListaComponent } from './profesiones-lista.component';

describe('ProfesionesListaComponent', () => {
  let component: ProfesionesListaComponent;
  let fixture: ComponentFixture<ProfesionesListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionesListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
