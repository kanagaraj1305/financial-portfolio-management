import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },  
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./components/portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: 'investment',
    loadChildren: () =>
      import('./components/investment-form/investment-form.module').then(
        (m) => m.InvestmentFormModule
      ),
  },
 
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
