import { Component, OnInit, ViewChild, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

interface NavItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isMobile = signal(false);

  navItems: NavItem[] = [
    { label: 'Dashboard',    icon: 'dashboard',       route: '/dashboard' },
    { label: 'Imbarcazioni', icon: 'sailing',          route: '/imbarcazioni' },
    { label: 'Ordini',       icon: 'receipt_long',     route: '/ordini' },
    { label: 'Clienti',      icon: 'people',           route: '/clienti' },
    { label: 'Produzione',   icon: 'construction',     route: '/produzione' },
    { label: 'Magazzino',    icon: 'warehouse',        route: '/magazzino' },
    { label: 'Fornitori',    icon: 'local_shipping',   route: '/fornitori' },
    { label: 'Personale',    icon: 'badge',            route: '/personale' },
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet])
      .subscribe(result => this.isMobile.set(result.matches));
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
