import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoCargoComponent } from './estado-cargo.component';

describe('EstadoCargoComponent', () => {
  let component: EstadoCargoComponent;
  let fixture: ComponentFixture<EstadoCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoCargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
