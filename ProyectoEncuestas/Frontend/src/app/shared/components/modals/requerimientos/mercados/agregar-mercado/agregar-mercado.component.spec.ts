import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMercadoComponent } from './agregar-mercado.component';

describe('AgregarMercadoComponent', () => {
  let component: AgregarMercadoComponent;
  let fixture: ComponentFixture<AgregarMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMercadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
