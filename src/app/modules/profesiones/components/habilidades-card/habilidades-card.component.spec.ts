import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadesCardComponent } from './habilidades-card.component';

describe('HabilidadesCardComponent', () => {
  let component: HabilidadesCardComponent;
  let fixture: ComponentFixture<HabilidadesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HabilidadesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HabilidadesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
