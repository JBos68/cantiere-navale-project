import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MockDataService } from '../../core/services/mock-data.service';
import { Ordine } from '../../core/models/ordine.model';
import { NuovoOrdineDialogComponent } from './nuovo-ordine-dialog.component';

@Component({
  selector: 'app-ordini',
  standalone: true,
  imports: [CommonModule, DatePipe, MatTableModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './ordini.component.html',
  styleUrl: './ordini.component.scss'
})
export class OrdiniComponent implements OnInit {
  ordini: Ordine[] = [];
  displayedColumns = ['numero', 'clienteNome', 'imbarcazioneNome', 'dataOrdine', 'dataConsegna', 'valore', 'acconto', 'stato'];

  constructor(private dataService: MockDataService, private dialog: MatDialog) {}

  ngOnInit() { this.ordini = this.dataService.getOrdini(); }

  openNuovoOrdine() {
    this.dialog.open(NuovoOrdineDialogComponent).afterClosed()
      .subscribe((result: Ordine) => {
        if (result) this.ordini = [...this.ordini, result];
      });
  }

  getStatoClass(stato: string): string {
    const map: Record<string, string> = {
      'In lavorazione': 'status-in-lavorazione',
      'In attesa': 'status-attesa',
      'Completato': 'status-completato',
      'Consegnato': 'status-completato',
      'Annullato': 'status-sospeso',
    };
    return map[stato] || '';
  }

  fmt(val: number): string {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  }
}
