import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoMercadoComponent } from './estado-mercado.component';

describe('EstadoMercadoComponent', () => {
  let component: EstadoMercadoComponent;
  let fixture: ComponentFixture<EstadoMercadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoMercadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
