import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSectorEditarComponent } from './popup-sector-editar.component';

describe('PopupSectorEditarComponent', () => {
  let component: PopupSectorEditarComponent;
  let fixture: ComponentFixture<PopupSectorEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSectorEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSectorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
