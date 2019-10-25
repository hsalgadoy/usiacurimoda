import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadenavalorComponent } from './cadenavalor.component';

describe('CadenavalorComponent', () => {
  let component: CadenavalorComponent;
  let fixture: ComponentFixture<CadenavalorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadenavalorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadenavalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
