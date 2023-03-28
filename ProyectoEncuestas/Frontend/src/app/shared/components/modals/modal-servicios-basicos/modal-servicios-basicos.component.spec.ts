import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServiciosBasicosComponent } from './modal-servicios-basicos.component';

describe('ModalServiciosBasicosComponent', () => {
  let component: ModalServiciosBasicosComponent;
  let fixture: ComponentFixture<ModalServiciosBasicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalServiciosBasicosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalServiciosBasicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
