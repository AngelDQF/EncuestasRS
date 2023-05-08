import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTenenciaTierraComponent } from './agregar-tenencia-tierra.component';

describe('AgregarTenenciaTierraComponent', () => {
  let component: AgregarTenenciaTierraComponent;
  let fixture: ComponentFixture<AgregarTenenciaTierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTenenciaTierraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTenenciaTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
