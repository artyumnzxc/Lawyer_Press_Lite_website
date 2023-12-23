/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BankingLawComponent } from './banking-law.component';

describe('BankingLawComponent', () => {
  let component: BankingLawComponent;
  let fixture: ComponentFixture<BankingLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
