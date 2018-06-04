import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaDeVisitaComponent } from './carga-de-visita.component';

describe('CargaDeVisitaComponent', () => {
  let component: CargaDeVisitaComponent;
  let fixture: ComponentFixture<CargaDeVisitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaDeVisitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaDeVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
