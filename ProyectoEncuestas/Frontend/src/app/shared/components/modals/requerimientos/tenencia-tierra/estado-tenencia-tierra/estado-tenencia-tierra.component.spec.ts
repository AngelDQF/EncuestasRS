import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoTenenciaTierraComponent } from './estado-tenencia-tierra.component';

describe('EstadoTenenciaTierraComponent', () => {
  let component: EstadoTenenciaTierraComponent;
  let fixture: ComponentFixture<EstadoTenenciaTierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoTenenciaTierraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoTenenciaTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
