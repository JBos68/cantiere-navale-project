import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MockDataService } from '../../core/services/mock-data.service';
import { Fornitore } from '../../core/models/fornitore.model';
import { NuovoFornitoreDialogComponent } from './nuovo-fornitore-dialog.component';

@Component({
  selector: 'app-fornitori',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './fornitori.component.html',
  styleUrl: './fornitori.component.scss'
})
export class FornitoriComponent implements OnInit {
  fornitori: Fornitore[] = [];
  displayedColumns = ['ragioneSociale', 'categoria', 'paese', 'contatto', 'email', 'telefono', 'affidabilita', 'attivo'];

  constructor(private dataService: MockDataService, private dialog: MatDialog) {}

  ngOnInit() { this.fornitori = this.dataService.getFornitori(); }

  openNuovoFornitore() {
    this.dialog.open(NuovoFornitoreDialogComponent).afterClosed()
      .subscribe((result: Fornitore) => {
        if (result) this.fornitori = [...this.fornitori, result];
      });
  }

  getStars(n: number): string[] {
    return Array(5).fill('').map((_, i) => i < n ? 'star' : 'star_border');
  }
}
