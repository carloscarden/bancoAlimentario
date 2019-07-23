import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductoComponent } from './view-producto.component';

describe('ViewComponent', () => {
  let component: ViewProductoComponent;
  let fixture: ComponentFixture<ViewProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
