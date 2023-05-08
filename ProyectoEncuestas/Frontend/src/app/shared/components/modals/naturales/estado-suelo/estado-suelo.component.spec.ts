import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoSueloComponent } from './estado-suelo.component';

describe('EstadoSueloComponent', () => {
  let component: EstadoSueloComponent;
  let fixture: ComponentFixture<EstadoSueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoSueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoSueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
