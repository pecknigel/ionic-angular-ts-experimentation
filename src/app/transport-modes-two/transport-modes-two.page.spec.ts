import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportModesTwoPage } from './transport-modes-two.page';

describe('TransportModesTwoPage', () => {
  let component: TransportModesTwoPage;
  let fixture: ComponentFixture<TransportModesTwoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransportModesTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
