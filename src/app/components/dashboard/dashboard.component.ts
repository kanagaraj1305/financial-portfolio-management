import { Component } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  portfolioData: any;
  performanceMetrics: any;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioData = this.portfolioService.getPortfolioData();
    this.performanceMetrics = this.portfolioService.getPerformanceMetrics();
  }
}
