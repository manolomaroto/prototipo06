import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedBottonComponent } from './fixed-botton.component';

describe('FixedBottonComponent', () => {
  let component: FixedBottonComponent;
  let fixture: ComponentFixture<FixedBottonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FixedBottonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedBottonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
