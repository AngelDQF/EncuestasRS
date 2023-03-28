import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsosTierraComponent } from './modal-usos-tierra.component';

describe('ModalUsosTierraComponent', () => {
  let component: ModalUsosTierraComponent;
  let fixture: ComponentFixture<ModalUsosTierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalUsosTierraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUsosTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
