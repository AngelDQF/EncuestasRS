import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoUsosTierraComponent } from './estado-usos-tierra.component';

describe('EstadoUsosTierraComponent', () => {
  let component: EstadoUsosTierraComponent;
  let fixture: ComponentFixture<EstadoUsosTierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoUsosTierraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoUsosTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
