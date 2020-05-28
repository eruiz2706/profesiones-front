import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialLabComponent } from './historial-lab.component';

describe('HistorialLabComponent', () => {
  let component: HistorialLabComponent;
  let fixture: ComponentFixture<HistorialLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
