import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRecorridosComponent } from './listar-recorridos.component';

describe('ListarRecorridosComponent', () => {
  let component: ListarRecorridosComponent;
  let fixture: ComponentFixture<ListarRecorridosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarRecorridosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRecorridosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
