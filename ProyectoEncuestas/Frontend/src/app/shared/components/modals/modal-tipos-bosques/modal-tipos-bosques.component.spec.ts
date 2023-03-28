import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTiposBosquesComponent } from './modal-tipos-bosques.component';

describe('ModalTiposBosquesComponent', () => {
  let component: ModalTiposBosquesComponent;
  let fixture: ComponentFixture<ModalTiposBosquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTiposBosquesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTiposBosquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
