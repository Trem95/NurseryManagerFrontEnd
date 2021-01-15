/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaednurseComponent } from './paednurse.component';

describe('PaednurseComponent', () => {
  let component: PaednurseComponent;
  let fixture: ComponentFixture<PaednurseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaednurseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaednurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
