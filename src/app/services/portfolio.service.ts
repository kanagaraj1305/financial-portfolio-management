import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
  private investments: any[] = [];

  getPortfolioData() {
    // Mock data for portfolio
    return [
      { data: [30, 50, 20], label: 'Portfolio Allocation' }
    ];
  }

  getPerformanceMetrics() {
    // Mock performance metrics
    return { totalValue: 100000, returnRate: 5 };
  }

  addInvestment(investment: any) {
    this.investments.push(investment);
  }
}