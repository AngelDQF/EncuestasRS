import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarSueloComponent } from './agregar-suelo.component';

describe('AgregarSueloComponent', () => {
  let component: AgregarSueloComponent;
  let fixture: ComponentFixture<AgregarSueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarSueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarSueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
