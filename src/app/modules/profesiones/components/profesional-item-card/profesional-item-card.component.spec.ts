import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalItemCardComponent } from './profesional-item-card.component';

describe('ProfesionalItemCardComponent', () => {
  let component: ProfesionalItemCardComponent;
  let fixture: ComponentFixture<ProfesionalItemCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfesionalItemCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesionalItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
