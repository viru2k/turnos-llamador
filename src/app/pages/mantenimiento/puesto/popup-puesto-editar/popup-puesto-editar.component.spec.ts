import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupPuestoEditarComponent } from './popup-puesto-editar.component';

describe('PopupPuestoEditarComponent', () => {
  let component: PopupPuestoEditarComponent;
  let fixture: ComponentFixture<PopupPuestoEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupPuestoEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupPuestoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
