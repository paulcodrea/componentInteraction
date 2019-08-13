import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChildComponentComponent } from './display-child-component.component';

describe('DisplayChildComponentComponent', () => {
  let component: DisplayChildComponentComponent;
  let fixture: ComponentFixture<DisplayChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
