import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCrearComponent } from './content-crear.component';

describe('ContentCrearComponent', () => {
  let component: ContentCrearComponent;
  let fixture: ComponentFixture<ContentCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
