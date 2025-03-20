import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-portfolio-performance-chart',
  template: '<canvas id="performanceChart"></canvas>',
})
export class PortfolioPerformanceChartComponent {
  ngOnInit() {
    const ctx = document.getElementById('performanceChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [{
          label: 'Portfolio Performance',
          data: [65, 59, 80, 81, 56],
          borderColor: 'rgba(75, 192, 192, 1)',
          fill: false,
        }]
      },
    });
  }
}