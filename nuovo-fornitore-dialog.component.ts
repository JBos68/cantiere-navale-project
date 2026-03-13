import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Fornitore, CategoriaFornitore } from '../../core/models/fornitore.model';

@Component({
  selector: 'app-nuovo-fornitore-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>Nuovo Fornitore</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form">
        <div class="form-row">
          <mat-form-field appearance="outline" style="flex:2">
            <mat-label>Ragione Sociale</mat-label>
            <input matInput formControlName="ragioneSociale">
          </mat-form-field>
          <mat-form-field appearance="outline" style="flex:1">
            <mat-label>Categoria</mat-label>
            <mat-select formControlName="categoria">
              @for (c of categorie; track c) {
                <mat-option [value]="c">{{ c }}</mat-option>
              }
            </mat-select>
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Paese</mat-label>
            <input matInput formControlName="paese">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Città</mat-label>
            <input matInput formControlName="citta">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Referente</mat-label>
            <input matInput formControlName="contatto">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Partita IVA</mat-label>
            <input matInput formControlName="partitaIva">
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Email</mat-label>
            <input matInput formControlName="email" type="email">
            @if (form.get('email')?.invalid && form.get('email')?.touched) {
              <mat-error>Email non valida</mat-error>
            }
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Telefono</mat-label>
            <input matInput formControlName="telefono">
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Affidabilità (1–5)</mat-label>
          <mat-select formControlName="affidabilita">
            @for (n of [1,2,3,4,5]; track n) {
              <mat-option [value]="n">{{ n }} stelle</mat-option>
            }
          </mat-select>
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
    .dialog-form { display: flex; flex-direction: column; gap: 4px; min-width: 540px; padding-top: 8px; }
    .form-row { display: flex; gap: 16px; }
    .form-row mat-form-field { flex: 1; }
    .full-width { width: 100%; }
  `],
})
export class NuovoFornitoreDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<NuovoFornitoreDialogComponent>);

  categorie: CategoriaFornitore[] = ['Materiali', 'Motori', 'Elettronica', 'Arredo', 'Servizi', 'Varie'];

  form = this.fb.group({
    ragioneSociale: ['', Validators.required],
    categoria:      ['Materiali' as CategoriaFornitore, Validators.required],
    paese:          ['Italia'],
    citta:          [''],
    contatto:       [''],
    email:          ['', [Validators.required, Validators.email]],
    telefono:       [''],
    partitaIva:     [''],
    affidabilita:   [3, Validators.required],
  });

  salva() {
    if (this.form.valid) {
      const v = this.form.value;
      const fornitore: Fornitore = {
        id:             Date.now().toString(),
        ragioneSociale: v.ragioneSociale!,
        categoria:      v.categoria as CategoriaFornitore,
        paese:          v.paese || '',
        citta:          v.citta || '',
        contatto:       v.contatto || '',
        email:          v.email!,
        telefono:       v.telefono || '',
        partitaIva:     v.partitaIva || '',
        affidabilita:   v.affidabilita!,
        attivo:         true,
      };
      this.dialogRef.close(fornitore);
    }
  }
}
