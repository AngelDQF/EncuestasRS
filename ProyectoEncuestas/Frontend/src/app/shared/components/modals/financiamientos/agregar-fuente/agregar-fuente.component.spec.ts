import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFuenteComponent } from './agregar-fuente.component';

describe('AgregarFuenteComponent', () => {
  let component: AgregarFuenteComponent;
  let fixture: ComponentFixture<AgregarFuenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFuenteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarFuenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
