import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUserDonanteComponent } from './listar-user-donante.component';

describe('ListarUserDonanteComponent', () => {
  let component: ListarUserDonanteComponent;
  let fixture: ComponentFixture<ListarUserDonanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarUserDonanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarUserDonanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
