/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OurBlogComponent } from './our-blog.component';

describe('OurBlogComponent', () => {
  let component: OurBlogComponent;
  let fixture: ComponentFixture<OurBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
