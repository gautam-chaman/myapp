import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgworksComponent } from './ngworks.component';

describe('NgworksComponent', () => {
  let component: NgworksComponent;
  let fixture: ComponentFixture<NgworksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgworksComponent]
    });
    fixture = TestBed.createComponent(NgworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
