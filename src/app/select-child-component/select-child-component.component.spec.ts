import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectChildComponentComponent } from './select-child-component.component';

describe('SelectChildComponentComponent', () => {
  let component: SelectChildComponentComponent;
  let fixture: ComponentFixture<SelectChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
