import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEscolaridadComponent } from './agregar-escolaridad.component';

describe('AgregarEscolaridadComponent', () => {
  let component: AgregarEscolaridadComponent;
  let fixture: ComponentFixture<AgregarEscolaridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEscolaridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEscolaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
