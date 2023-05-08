import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoBosqueComponent } from './estado-bosque.component';

describe('EstadoBosqueComponent', () => {
  let component: EstadoBosqueComponent;
  let fixture: ComponentFixture<EstadoBosqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoBosqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoBosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
