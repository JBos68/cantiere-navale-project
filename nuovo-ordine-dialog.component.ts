import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Ordine, StatoOrdine } from '../../core/models/ordine.model';

@Component({
  selector: 'app-nuovo-ordine-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>Nuovo Ordine</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form">
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Cliente</mat-label>
            <input matInput formControlName="clienteNome">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Imbarcazione</mat-label>
            <input matInput formControlName="imbarcazioneNome">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Data Ordine</mat-label>
            <input matInput formControlName="dataOrdine" type="date">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Consegna Prevista</mat-label>
            <input matInput formControlName="dataConsegna" type="date">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Valore (€)</mat-label>
            <input matInput formControlName="valore" type="number" min="0">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Acconto (€)</mat-label>
            <input matInput formControlName="acconto" type="number" min="0">
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Stato</mat-label>
          <mat-select formControlName="stato">
            @for (s of stati; track s) {
              <mat-option [value]="s">{{ s }}</mat-option>
            }
          </mat-select>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Note</mat-label>
          <textarea matInput formControlName="note" rows="2"></textarea>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Annulla</button>
      <button mat-raised-button color="primary" [disabled]="form.invalid" (click)="salva()">
        Salva
      </button>
    </mat-dialog-actions>
  `,
  styles: [`
    .dialog-form { display: flex; flex-direction: column; gap: 4px; min-width: 520px; padding-top: 8px; }
    .form-row { display: flex; gap: 16px; }
    .form-row mat-form-field { flex: 1; }
    .full-width { width: 100%; }
  `],
})
export class NuovoOrdineDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<NuovoOrdineDialogComponent>);

  stati: StatoOrdine[] = ['In attesa', 'In lavorazione', 'Completato', 'Consegnato', 'Annullato'];

  form = this.fb.group({
    clienteNome:     ['', Validators.required],
    imbarcazioneNome:['', Validators.required],
    dataOrdine:      [new Date().toISOString().split('T')[0], Validators.required],
    dataConsegna:    [''],
    valore:          [null as number | null, [Validators.required, Validators.min(0)]],
    acconto:         [0],
    stato:           ['In attesa' as StatoOrdine, Validators.required],
    note:            [''],
  });

  salva() {
    if (this.form.valid) {
      const v = this.form.value;
      const anno = new Date().getFullYear();
      const ordine: Ordine = {
        id:               Date.now().toString(),
        numero:           `ORD-${anno}-${String(Math.floor(Math.random() * 900) + 100)}`,
        clienteId:        '',
        clienteNome:      v.clienteNome!,
        imbarcazioneId:   '',
        imbarcazioneNome: v.imbarcazioneNome!,
        dataOrdine:       v.dataOrdine!,
        dataConsegna:     v.dataConsegna || '',
        valore:           v.valore!,
        acconto:          v.acconto || 0,
        stato:            v.stato as StatoOrdine,
        note:             v.note || undefined,
      };
      this.dialogRef.close(ordine);
    }
  }
}
