import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoOrgComponent } from './estado-org.component';

describe('EstadoOrgComponent', () => {
  let component: EstadoOrgComponent;
  let fixture: ComponentFixture<EstadoOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
