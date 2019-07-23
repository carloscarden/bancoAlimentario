import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarUserDonanteComponent } from './cargar-user-donante.component';

describe('CargarUserDonanteComponent', () => {
  let component: CargarUserDonanteComponent;
  let fixture: ComponentFixture<CargarUserDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargarUserDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarUserDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
