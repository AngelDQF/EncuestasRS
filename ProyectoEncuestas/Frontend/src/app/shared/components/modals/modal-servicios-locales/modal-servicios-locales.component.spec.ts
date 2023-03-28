import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalServiciosLocalesComponent } from './modal-servicios-locales.component';

describe('ModalServiciosLocalesComponent', () => {
  let component: ModalServiciosLocalesComponent;
  let fixture: ComponentFixture<ModalServiciosLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalServiciosLocalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalServiciosLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
