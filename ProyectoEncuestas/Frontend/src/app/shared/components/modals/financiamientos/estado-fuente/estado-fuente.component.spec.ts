import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoFuenteComponent } from './estado-fuente.component';

describe('EstadoFuenteComponent', () => {
  let component: EstadoFuenteComponent;
  let fixture: ComponentFixture<EstadoFuenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoFuenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoFuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
