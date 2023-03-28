import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEstructurasComponent } from './modal-estructuras.component';

describe('ModalEstructurasComponent', () => {
  let component: ModalEstructurasComponent;
  let fixture: ComponentFixture<ModalEstructurasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEstructurasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEstructurasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
