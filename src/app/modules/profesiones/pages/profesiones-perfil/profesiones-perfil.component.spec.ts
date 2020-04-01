import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionesPerfilComponent } from './profesiones-perfil.component';

describe('ProfesionesPerfilComponent', () => {
  let component: ProfesionesPerfilComponent;
  let fixture: ComponentFixture<ProfesionesPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionesPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionesPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
