import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutEscolaridadComponent } from './put-escolaridad.component';

describe('PutEscolaridadComponent', () => {
  let component: PutEscolaridadComponent;
  let fixture: ComponentFixture<PutEscolaridadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutEscolaridadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutEscolaridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
