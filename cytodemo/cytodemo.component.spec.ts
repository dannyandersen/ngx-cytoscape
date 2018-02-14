import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CytodemoComponent } from './cytodemo.component';

describe('CytodemoComponent', () => {
  let component: CytodemoComponent;
  let fixture: ComponentFixture<CytodemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CytodemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CytodemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
