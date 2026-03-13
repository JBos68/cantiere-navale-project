import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MockDataService } from '../../core/services/mock-data.service';
import { Ordine } from '../../core/models/ordine.model';
import { Produzione } from '../../core/models/produzione.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatIconModule,
    MatTableModule,
    MatProgressBarModule,
    MatButtonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  kpi = {
    imbarcazioniInCostruzione: 0,
    ordiniAperti: 0,
    clientiTotali: 0,
    dipendentiAttivi: 0,
    valoreProduzioneAttiva: 0,
  };

  ultimeCommesse: Ordine[] = [];
  produzioneAttiva: Produzione[] = [];
  ordiniColonne = ['numero', 'clienteNome', 'imbarcazioneNome', 'valore', 'stato'];

  constructor(private dataService: MockDataService) {}

  ngOnInit() {
    const imbarcazioni = this.dataService.getImbarcazioni();
    const ordini = this.dataService.getOrdini();
    const clienti = this.dataService.getClienti();
    const personale = this.dataService.getPersonale();

    this.kpi.imbarcazioniInCostruzione = imbarcazioni.filter(i => i.stato === 'In costruzione').length;
    this.kpi.ordiniAperti = ordini.filter(o => o.stato === 'In lavorazione' || o.stato === 'In attesa').length;
    this.kpi.clientiTotali = clienti.length;
    this.kpi.dipendentiAttivi = personale.filter(p => p.attivo).length;
    this.kpi.valoreProduzioneAttiva = ordini
      .filter(o => o.stato === 'In lavorazione' || o.stato === 'In attesa')
      .reduce((sum, o) => sum + o.valore, 0);

    this.ultimeCommesse = ordini.slice(0, 5);
    this.produzioneAttiva = this.dataService.getProduzione();
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
