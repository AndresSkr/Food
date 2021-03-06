import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureComponent } from './facture.component';

describe('FactureComponent', () => {
  let component: FactureComponent;
  let fixture: ComponentFixture<FactureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* it('Method BuyFinish Good', () => {
    spyOn(window, 'alert');
    component.buy();
    expect(window.alert).toHaveBeenCalledWith('Buy Done')
    component.cancelBuy();
    expect(window.alert).toHaveBeenCalledWith('successfully canceled') 
  }); */

});
