import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurKeepChlid2Component } from './our-keep-chlid2.component';

describe('OurKeepChlid2Component', () => {
  let component: OurKeepChlid2Component;
  let fixture: ComponentFixture<OurKeepChlid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurKeepChlid2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurKeepChlid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
