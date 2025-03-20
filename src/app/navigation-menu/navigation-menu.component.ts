import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  imports: [NgFor, RouterModule],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NavigationMenuComponent {
  menuItems = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'Portfolio', route: '/portfolio' },
    { label: 'InvestmentForm', route: '/investment' }
  ];
}
