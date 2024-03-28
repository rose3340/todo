import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroceryiComponent } from './groceryi.component';

describe('GroceryiComponent', () => {
  let component: GroceryiComponent;
  let fixture: ComponentFixture<GroceryiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroceryiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroceryiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
