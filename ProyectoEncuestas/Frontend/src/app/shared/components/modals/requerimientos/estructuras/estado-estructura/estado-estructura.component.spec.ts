import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoEstructuraComponent } from './estado-estructura.component';

describe('EstadoEstructuraComponent', () => {
  let component: EstadoEstructuraComponent;
  let fixture: ComponentFixture<EstadoEstructuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoEstructuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoEstructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
