import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlegadacolorComponent } from './llegadacolor.component';

describe('LlegadacolorComponent', () => {
  let component: LlegadacolorComponent;
  let fixture: ComponentFixture<LlegadacolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlegadacolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlegadacolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
