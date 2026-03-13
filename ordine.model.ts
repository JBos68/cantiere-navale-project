export type StatoOrdine = 'In attesa' | 'In lavorazione' | 'Completato' | 'Consegnato' | 'Annullato';

export interface Ordine {
  id: string;
  numero: string;
  clienteId: string;
  clienteNome: string;
  imbarcazioneId: string;
  imbarcazioneNome: string;
  dataOrdine: string;
  dataConsegna: string;
  valore: number;
  stato: StatoOrdine;
  acconto: number;
  note?: string;
}
