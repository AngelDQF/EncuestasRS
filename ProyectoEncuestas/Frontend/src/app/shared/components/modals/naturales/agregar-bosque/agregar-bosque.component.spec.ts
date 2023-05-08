import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarBosqueComponent } from './agregar-bosque.component';

describe('AgregarBosqueComponent', () => {
  let component: AgregarBosqueComponent;
  let fixture: ComponentFixture<AgregarBosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarBosqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarBosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
