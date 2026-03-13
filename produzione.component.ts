import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MockDataService } from '../../core/services/mock-data.service';
import { Produzione } from '../../core/models/produzione.model';

@Component({
  selector: 'app-produzione',
  standalone: true,
  imports: [CommonModule, DatePipe, MatCardModule, MatIconModule, MatProgressBarModule],
  templateUrl: './produzione.component.html',
  styleUrl: './produzione.component.scss'
})
export class ProduzioneComponent implements OnInit {
  produzioni: Produzione[] = [];

  constructor(private dataService: MockDataService) {}
  ngOnInit() { this.produzioni = this.dataService.getProduzione(); }

  getProgressColor(perc: number): 'primary' | 'accent' | 'warn' {
    if (perc < 30) return 'warn';
    if (perc < 70) return 'accent';
    return 'primary';
  }
}
