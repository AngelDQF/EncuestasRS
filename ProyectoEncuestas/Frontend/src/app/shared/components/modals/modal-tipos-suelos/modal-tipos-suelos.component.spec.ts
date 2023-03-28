import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTiposSuelosComponent } from './modal-tipos-suelos.component';

describe('ModalTiposSuelosComponent', () => {
  let component: ModalTiposSuelosComponent;
  let fixture: ComponentFixture<ModalTiposSuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTiposSuelosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTiposSuelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
