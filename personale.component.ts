import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MockDataService } from '../../core/services/mock-data.service';
import { Dipendente } from '../../core/models/personale.model';

@Component({
  selector: 'app-personale',
  standalone: true,
  imports: [CommonModule, DatePipe, MatTableModule, MatCardModule, MatIconModule],
  templateUrl: './personale.component.html',
  styleUrl: './personale.component.scss'
})
export class PersonaleComponent implements OnInit {
  dipendenti: Dipendente[] = [];
  displayedColumns = ['nome', 'ruolo', 'reparto', 'email', 'telefono', 'dataAssunzione', 'oreSettimanali', 'attivo'];

  constructor(private dataService: MockDataService) {}
  ngOnInit() { this.dipendenti = this.dataService.getPersonale(); }
}
