import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MockDataService } from '../../core/services/mock-data.service';
import { Cliente } from '../../core/models/cliente.model';
import { NuovoClienteDialogComponent } from './nuovo-cliente-dialog.component';

@Component({
  selector: 'app-clienti',
  standalone: true,
  imports: [CommonModule, DatePipe, MatTableModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './clienti.component.html',
  styleUrl: './clienti.component.scss'
})
export class ClientiComponent implements OnInit {
  clienti: Cliente[] = [];
  displayedColumns = ['nome', 'email', 'telefono', 'nazione', 'tipoCliente', 'ordini', 'acquistatoDal'];

  constructor(private dataService: MockDataService, private dialog: MatDialog) {}

  ngOnInit() { this.clienti = this.dataService.getClienti(); }

  openNuovoCliente() {
    this.dialog.open(NuovoClienteDialogComponent).afterClosed()
      .subscribe((result: Cliente) => {
        if (result) this.clienti = [...this.clienti, result];
      });
  }
}
