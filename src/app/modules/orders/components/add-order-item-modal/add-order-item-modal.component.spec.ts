import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrderItemModalComponent } from './add-order-item-modal.component';

describe('AddOrderItemModalComponent', () => {
  let component: AddOrderItemModalComponent;
  let fixture: ComponentFixture<AddOrderItemModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrderItemModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOrderItemModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
