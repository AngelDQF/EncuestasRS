import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRequerimientoComponent } from './agregar-requerimiento.component';

describe('AgregarRequerimientoComponent', () => {
  let component: AgregarRequerimientoComponent;
  let fixture: ComponentFixture<AgregarRequerimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRequerimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
