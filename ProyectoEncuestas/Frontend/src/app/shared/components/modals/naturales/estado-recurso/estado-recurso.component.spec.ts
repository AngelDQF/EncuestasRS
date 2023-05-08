import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoRecursoComponent } from './estado-recurso.component';

describe('EstadoRecursoComponent', () => {
  let component: EstadoRecursoComponent;
  let fixture: ComponentFixture<EstadoRecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoRecursoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
