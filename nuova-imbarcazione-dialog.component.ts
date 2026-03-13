import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Imbarcazione, TipoImbarcazione, StatoImbarcazione } from '../../core/models/imbarcazione.model';

@Component({
  selector: 'app-nuova-imbarcazione-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>Nuova Imbarcazione</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Nome</mat-label>
          <input matInput formControlName="nome">
        </mat-form-field>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Tipo</mat-label>
            <mat-select formControlName="tipo">
              @for (t of tipi; track t) {
                <mat-option [value]="t">{{ t }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Stato</mat-label>
            <mat-select formControlName="stato">
              @for (s of stati; track s) {
                <mat-option [value]="s">{{ s }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Lunghezza (m)</mat-label>
            <input matInput formControlName="lunghezzaMt" type="number" min="1">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Anno</mat-label>
            <input matInput formControlName="anno" type="number">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Materiale</mat-label>
            <input matInput formControlName="materiale">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Prezzo (€)</mat-label>
            <input matInput formControlName="prezzo" type="number" min="0">
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Cliente (opzionale)</mat-label>
          <input matInput formControlName="cliente">
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Descrizione</mat-label>
          <textarea matInput formControlName="descrizione" rows="2"></textarea>
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
export class NuovaImbarcazioneDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<NuovaImbarcazioneDialogComponent>);

  tipi: TipoImbarcazione[] = ['Barca a Vela', 'Motoscafo', 'Yacht', 'Panfilo', 'Catamarano', 'Gommone'];
  stati: StatoImbarcazione[] = ['In costruzione', 'Completata', 'In consegna', 'Venduta', 'In esposizione'];

  form = this.fb.group({
    nome:        ['', Validators.required],
    tipo:        ['Motoscafo', Validators.required],
    stato:       ['In costruzione', Validators.required],
    lunghezzaMt: [null as number | null, [Validators.required, Validators.min(1)]],
    anno:        [new Date().getFullYear(), Validators.required],
    materiale:   ['', Validators.required],
    prezzo:      [null as number | null, [Validators.required, Validators.min(0)]],
    cliente:     [''],
    descrizione: [''],
  });

  salva() {
    if (this.form.valid) {
      const v = this.form.value;
      const imb: Imbarcazione = {
        id:          Date.now().toString(),
        nome:        v.nome!,
        tipo:        v.tipo as TipoImbarcazione,
        stato:       v.stato as StatoImbarcazione,
        lunghezzaMt: v.lunghezzaMt!,
        anno:        v.anno!,
        materiale:   v.materiale!,
        prezzo:      v.prezzo!,
        cliente:     v.cliente || undefined,
        descrizione: v.descrizione || undefined,
      };
      this.dialogRef.close(imb);
    }
  }
}
