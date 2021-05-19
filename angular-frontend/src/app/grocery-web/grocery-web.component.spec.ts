import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryWebComponent } from './grocery-web.component';

describe('GroceryWebComponent', () => {
  let component: GroceryWebComponent;
  let fixture: ComponentFixture<GroceryWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroceryWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroceryWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
