import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTiposFinanciamientosComponent } from './modal-tipos-financiamientos.component';

describe('ModalTiposFinanciamientosComponent', () => {
  let component: ModalTiposFinanciamientosComponent;
  let fixture: ComponentFixture<ModalTiposFinanciamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTiposFinanciamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTiposFinanciamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
