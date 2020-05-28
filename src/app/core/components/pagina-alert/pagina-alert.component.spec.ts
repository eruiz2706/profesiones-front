import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaAlertComponent } from './pagina-alert.component';

describe('PaginaAlertComponent', () => {
  let component: PaginaAlertComponent;
  let fixture: ComponentFixture<PaginaAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
