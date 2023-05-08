import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarUsosTierraComponent } from './agregar-usos-tierra.component';

describe('AgregarUsosTierraComponent', () => {
  let component: AgregarUsosTierraComponent;
  let fixture: ComponentFixture<AgregarUsosTierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarUsosTierraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarUsosTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
