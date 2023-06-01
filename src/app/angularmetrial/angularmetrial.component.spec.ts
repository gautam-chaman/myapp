import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularmetrialComponent } from './angularmetrial.component';

describe('AngularmetrialComponent', () => {
  let component: AngularmetrialComponent;
  let fixture: ComponentFixture<AngularmetrialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularmetrialComponent]
    });
    fixture = TestBed.createComponent(AngularmetrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
