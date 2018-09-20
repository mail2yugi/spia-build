import { TestBed, inject } from '@angular/core/testing';

import { DemoD3ChartsService } from './demo-d3-charts.service';

describe('DemoD3ChartsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoD3ChartsService]
    });
  });

  it('should be created', inject([DemoD3ChartsService], (service: DemoD3ChartsService) => {
    expect(service).toBeTruthy();
  }));
});
