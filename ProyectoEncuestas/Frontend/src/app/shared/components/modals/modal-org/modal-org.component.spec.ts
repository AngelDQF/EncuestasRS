import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrgComponent } from './modal-org.component';

describe('ModalOrgComponent', () => {
  let component: ModalOrgComponent;
  let fixture: ComponentFixture<ModalOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalOrgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
