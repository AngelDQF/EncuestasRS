import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoRequerimientoComponent } from './estado-requerimiento.component';

describe('EstadoRequerimientoComponent', () => {
  let component: EstadoRequerimientoComponent;
  let fixture: ComponentFixture<EstadoRequerimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoRequerimientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoRequerimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
