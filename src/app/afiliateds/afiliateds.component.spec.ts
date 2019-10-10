import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliatedsComponent } from './afiliateds.component';

describe('AfiliatedsComponent', () => {
  let component: AfiliatedsComponent;
  let fixture: ComponentFixture<AfiliatedsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfiliatedsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfiliatedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
