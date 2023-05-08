import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTipoComponent } from './estado-tipo.component';

describe('EstadoTipoComponent', () => {
  let component: EstadoTipoComponent;
  let fixture: ComponentFixture<EstadoTipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoTipoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoTipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
