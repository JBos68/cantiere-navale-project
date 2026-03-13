import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Cliente } from '../../core/models/cliente.model';

@Component({
  selector: 'app-nuovo-cliente-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule, MatDialogModule,
    MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>Nuovo Cliente</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="dialog-form">
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Nome</mat-label>
            <input matInput formControlName="nome">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Cognome / Rag. Sociale</mat-label>
            <input matInput formControlName="cognome">
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput formControlName="email" type="email">
          @if (form.get('email')?.invalid && form.get('email')?.touched) {
            <mat-error>Email non valida</mat-error>
          }
        </mat-form-field>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Telefono</mat-label>
            <input matInput formControlName="telefono">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Tipo Cliente</mat-label>
            <mat-select formControlName="tipoCliente">
              <mat-option value="Privato">Privato</mat-option>
              <mat-option value="Azienda">Azienda</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
        <div class="form-row">
          <mat-form-field appearance="outline">
            <mat-label>Nazione</mat-label>
            <input matInput formControlName="nazione">
          </mat-form-field>
          <mat-form-field appearance="outline">
            <mat-label>Città</mat-label>
            <input matInput formControlName="citta">
          </mat-form-field>
        </div>
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
    .dialog-form { display: flex; flex-direction: column; gap: 4px; min-width: 480px; padding-top: 8px; }
    .form-row { display: flex; gap: 16px; }
    .form-row mat-form-field { flex: 1; }
    .full-width { width: 100%; }
  `],
})
export class NuovoClienteDialogComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<NuovoClienteDialogComponent>);

  form = this.fb.group({
    nome:        ['', Validators.required],
    cognome:     ['', Validators.required],
    email:       ['', [Validators.required, Validators.email]],
    telefono:    [''],
    tipoCliente: ['Privato'],
    nazione:     ['Italia'],
    citta:       [''],
  });

  salva() {
    if (this.form.valid) {
      const v = this.form.value;
      const cliente: Cliente = {
        id:           Date.now().toString(),
        nome:         v.nome!,
        cognome:      v.cognome!,
        email:        v.email!,
        telefono:     v.telefono || '',
        tipoCliente:  v.tipoCliente as 'Privato' | 'Azienda',
        nazione:      v.nazione || '',
        citta:        v.citta || '',
        ordini:       0,
        acquistatoDal: new Date().toISOString().split('T')[0],
      };
      this.dialogRef.close(cliente);
    }
  }
}
