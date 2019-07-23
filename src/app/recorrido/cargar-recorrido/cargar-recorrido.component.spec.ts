import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarRecorridoComponent } from './cargar-recorrido.component';

describe('CargarRecorridoComponent', () => {
  let component: CargarRecorridoComponent;
  let fixture: ComponentFixture<CargarRecorridoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarRecorridoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarRecorridoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
