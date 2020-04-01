import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCollapseComponent } from './filter-collapse.component';

describe('FilterCollapseComponent', () => {
  let component: FilterCollapseComponent;
  let fixture: ComponentFixture<FilterCollapseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterCollapseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCollapseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
