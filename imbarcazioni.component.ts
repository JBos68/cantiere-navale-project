import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialog } from '@angular/material/dialog';
import { MockDataService } from '../../core/services/mock-data.service';
import { Imbarcazione } from '../../core/models/imbarcazione.model';
import { NuovaImbarcazioneDialogComponent } from './nuova-imbarcazione-dialog.component';

@Component({
  selector: 'app-imbarcazioni',
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    MatTableModule, MatCardModule, MatIconModule, MatButtonModule,
    MatFormFieldModule, MatInputModule, MatSelectModule,
  ],
  templateUrl: './imbarcazioni.component.html',
  styleUrl: './imbarcazioni.component.scss'
})
export class ImbarcazioniComponent implements OnInit {
  allData: Imbarcazione[] = [];
  filtro = signal('');
  tipoFiltro = signal('');

  filtered = computed(() => {
    let data = this.allData;
    const f = this.filtro().toLowerCase();
    const t = this.tipoFiltro();
    if (f) data = data.filter(i => i.nome.toLowerCase().includes(f) || (i.cliente ?? '').toLowerCase().includes(f));
    if (t) data = data.filter(i => i.tipo === t);
    return data;
  });

  displayedColumns = ['nome', 'tipo', 'lunghezzaMt', 'anno', 'materiale', 'cliente', 'prezzo', 'stato'];
  tipi = ['Barca a Vela', 'Motoscafo', 'Yacht', 'Panfilo', 'Catamarano', 'Gommone'];

  constructor(private dataService: MockDataService, private dialog: MatDialog) {}

  ngOnInit() {
    this.allData = this.dataService.getImbarcazioni();
  }

  openNuovaImbarcazione() {
    this.dialog.open(NuovaImbarcazioneDialogComponent).afterClosed()
      .subscribe((result: Imbarcazione) => {
        if (result) this.allData = [...this.allData, result];
      });
  }

  getStatoClass(stato: string): string {
    const map: Record<string, string> = {
      'In costruzione': 'status-in-lavorazione',
      'Completata': 'status-completato',
      'In consegna': 'status-attesa',
      'Venduta': 'status-completato',
      'In esposizione': 'status-active',
    };
    return map[stato] || '';
  }

  fmt(val: number): string {
    return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(val);
  }

  resetFiltri() {
    this.filtro.set('');
    this.tipoFiltro.set('');
  }
}
