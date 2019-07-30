import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCargaRecorridosComponent } from './ver-carga-recorridos.component';

describe('VerCargaRecorridosComponent', () => {
  let component: VerCargaRecorridosComponent;
  let fixture: ComponentFixture<VerCargaRecorridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerCargaRecorridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCargaRecorridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
