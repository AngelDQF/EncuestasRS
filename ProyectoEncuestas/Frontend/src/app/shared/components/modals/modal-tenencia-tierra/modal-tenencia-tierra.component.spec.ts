import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTenenciaTierraComponent } from './modal-tenencia-tierra.component';

describe('ModalTenenciaTierraComponent', () => {
  let component: ModalTenenciaTierraComponent;
  let fixture: ComponentFixture<ModalTenenciaTierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalTenenciaTierraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalTenenciaTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
