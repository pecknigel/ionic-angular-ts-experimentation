import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransportModesOnePage } from './transport-modes-one.page';

describe('TransportModesOnePage', () => {
  let component: TransportModesOnePage;
  let fixture: ComponentFixture<TransportModesOnePage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(TransportModesOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
