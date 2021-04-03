import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurKeepChlidComponent } from './our-keep-chlid.component';

describe('OurKeepChlidComponent', () => {
  let component: OurKeepChlidComponent;
  let fixture: ComponentFixture<OurKeepChlidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurKeepChlidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurKeepChlidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
