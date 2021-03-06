import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { StoreComponent } from './store.component';

describe('StoreComponent', () => {
  let component: StoreComponent;
  let fixture: ComponentFixture<StoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoreComponent],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('change customizing', () => {
    component.change();
    expect(component.customizing).toBeTruthy();
  });

  it('Method CalculateTotal Good', () => {
    component.calculateTotal(50);
    component.calculateTotal(150);
    expect(component.total).toEqual(200);
  });

  it('Method rest Good', () => {
    component.carShop = [2, 3, 4];
    component.calculateTotal(50);
    component.calculateTotal(150);
    component.rest();
    expect(component.carShop).toEqual([]);
    expect(component.total).toEqual(0);
  });

  it('Method BuyFinish Good', () => {
    spyOn(window, 'alert');
    component.buyFinish(true);
    expect(window.alert).toHaveBeenCalledWith('Buy Done')
    component.buyFinish(false);
    expect(window.alert).toHaveBeenCalledWith('successfully canceled')
  });

  it('Add item custom to carShop', () => {

    let itemcustom = {
      name: "hamburgueza",
      price: 5000
    }
    let itemcustom2 = {
      name: "hamburgueza",
      price: 3500
    }
    component.clickBuyItem(itemcustom);
    component.final(itemcustom)
    expect(component.customizing).toBeFalsy();

    component.clickBuyItem(itemcustom2);
    expect(component.customizing).toBeTruthy();
    component.final(itemcustom2)
    expect(component.customizing).toBeFalsy();
    expect(component.total).toEqual(8500);

  });

});
