import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMercadosComponent } from './modal-mercados.component';

describe('ModalMercadosComponent', () => {
  let component: ModalMercadosComponent;
  let fixture: ComponentFixture<ModalMercadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMercadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
