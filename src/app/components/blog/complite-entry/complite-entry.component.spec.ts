import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompliteEntryComponent } from './complite-entry.component';

describe('CompliteEntryComponent', () => {
  let component: CompliteEntryComponent;
  let fixture: ComponentFixture<CompliteEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompliteEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompliteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
