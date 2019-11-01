import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaminomodaComponent } from './caminomoda.component';

describe('CaminomodaComponent', () => {
  let component: CaminomodaComponent;
  let fixture: ComponentFixture<CaminomodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminomodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaminomodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
