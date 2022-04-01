import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerInviceComponent } from './customer-invice.component';

describe('CustomerInviceComponent', () => {
  let component: CustomerInviceComponent;
  let fixture: ComponentFixture<CustomerInviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerInviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerInviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
