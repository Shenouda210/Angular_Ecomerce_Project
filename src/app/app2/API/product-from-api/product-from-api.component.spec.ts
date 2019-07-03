import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFromAPIComponent } from './product-from-api.component';

describe('ProductFromAPIComponent', () => {
  let component: ProductFromAPIComponent;
  let fixture: ComponentFixture<ProductFromAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFromAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFromAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
