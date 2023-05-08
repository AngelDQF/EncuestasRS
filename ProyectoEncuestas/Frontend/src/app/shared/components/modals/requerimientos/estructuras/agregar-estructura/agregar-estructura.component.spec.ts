import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstructuraComponent } from './agregar-estructura.component';

describe('AgregarEstructuraComponent', () => {
  let component: AgregarEstructuraComponent;
  let fixture: ComponentFixture<AgregarEstructuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstructuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEstructuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
