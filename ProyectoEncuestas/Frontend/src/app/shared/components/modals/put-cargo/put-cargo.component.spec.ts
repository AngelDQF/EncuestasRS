import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PutCargoComponent } from './put-cargo.component';

describe('PutCargoComponent', () => {
  let component: PutCargoComponent;
  let fixture: ComponentFixture<PutCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PutCargoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PutCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
