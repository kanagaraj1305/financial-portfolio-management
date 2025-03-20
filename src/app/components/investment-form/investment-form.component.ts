import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-investment-form',
  standalone: false,
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.scss',
})
export class InvestmentFormComponent {
  investmentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private portfolioService: PortfolioService
  ) {
    this.investmentForm = this.fb.group({
      assetType: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(1)]],
      purchasePrice: [0, [Validators.required, Validators.min(0)]],
      purchaseDate: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.investmentForm.valid) {
      this.portfolioService.addInvestment(this.investmentForm.value);
      this.investmentForm.reset();
    }
  }
}
