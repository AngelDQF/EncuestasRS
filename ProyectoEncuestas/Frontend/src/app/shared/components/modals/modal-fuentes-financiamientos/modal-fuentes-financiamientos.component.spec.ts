import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFuentesFinanciamientosComponent } from './modal-fuentes-financiamientos.component';

describe('ModalFuentesFinanciamientosComponent', () => {
  let component: ModalFuentesFinanciamientosComponent;
  let fixture: ComponentFixture<ModalFuentesFinanciamientosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFuentesFinanciamientosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFuentesFinanciamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
