import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoProfesionalComponent } from './info-profesional.component';

describe('InfoProfesionalComponent', () => {
  let component: InfoProfesionalComponent;
  let fixture: ComponentFixture<InfoProfesionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoProfesionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoProfesionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
