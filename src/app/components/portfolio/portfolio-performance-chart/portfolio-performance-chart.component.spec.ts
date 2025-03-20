import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioPerformanceChartComponent } from './portfolio-performance-chart.component';

describe('PortfolioPerformanceChartComponent', () => {
  let component: PortfolioPerformanceChartComponent;
  let fixture: ComponentFixture<PortfolioPerformanceChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioPerformanceChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioPerformanceChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
