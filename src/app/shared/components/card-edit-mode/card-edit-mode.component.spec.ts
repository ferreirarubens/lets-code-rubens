/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardEditModeComponent } from './card-edit-mode.component';

describe('CardEditModeComponent', () => {
  let component: CardEditModeComponent;
  let fixture: ComponentFixture<CardEditModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEditModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEditModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
