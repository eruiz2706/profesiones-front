import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentStateImgComponent } from './content-state-img.component';

describe('ContentStateImgComponent', () => {
  let component: ContentStateImgComponent;
  let fixture: ComponentFixture<ContentStateImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentStateImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentStateImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
