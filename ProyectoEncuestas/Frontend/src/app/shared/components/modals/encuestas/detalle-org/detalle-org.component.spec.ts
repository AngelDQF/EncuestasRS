import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleOrgComponent } from './detalle-org.component';

describe('DetalleOrgComponent', () => {
  let component: DetalleOrgComponent;
  let fixture: ComponentFixture<DetalleOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
