import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MockDataService } from '../../core/services/mock-data.service';
import { ArticoloMagazzino } from '../../core/models/magazzino.model';

@Component({
  selector: 'app-magazzino',
  standalone: true,
  imports: [CommonModule, DatePipe, MatTableModule, MatCardModule, MatIconModule, MatProgressBarModule],
  templateUrl: './magazzino.component.html',
  styleUrl: './magazzino.component.scss'
})
export class MagazzinoComponent implements OnInit {
  articoli: ArticoloMagazzino[] = [];
  displayedColumns = ['codice', 'descrizione', 'categoria', 'quantita', 'giacenzaMinima', 'prezzoUnitario', 'fornitoreNome', 'ultimoRiordino', 'stock'];

  constructor(private dataService: MockDataService) {}
  ngOnInit() { this.articoli = this.dataService.getMagazzino(); }

  isLowStock(a: ArticoloMagazzino): boolean { return a.quantita <= a.giacenzaMinima; }

  getStockPercent(a: ArticoloMagazzino): number {
    return Math.min(100, Math.round((a.quantita / (a.giacenzaMinima * 2)) * 100));
  }

  fmt(val: number): string {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(val);
  }
}
