import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListComponent } from './food-list.component';

describe('FoodListComponent', () => {
  let component: FoodListComponent;
  let fixture: ComponentFixture<FoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodListComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('There is h1 tag with text LIST FOOD', () => {
    const compiled =fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('LIST FOOD')
  });

  it('Item not available', () => {
    let itemNotAvailable = {
      name:'papas',
      available:false
    }
    spyOn(window,'alert');
    component.clickSelectItem(itemNotAvailable);
    expect(window.alert).toHaveBeenCalledWith('Item not available')
  });

});
