import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoD3ChartsComponent } from './demo-d3-charts.component';

describe('DemoD3ChartsComponent', () => {
  let component: DemoD3ChartsComponent;
  let fixture: ComponentFixture<DemoD3ChartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoD3ChartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoD3ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
