export type FaseProduzione =
  | 'Progettazione'
  | 'Costruzione scafo'
  | 'Allestimento'
  | 'Motorizzazione'
  | 'Verniciatura'
  | 'Collaudo'
  | 'Consegna';

export interface FaseAvanzamento {
  nome: FaseProduzione;
  completata: boolean;
  dataInizio?: string;
  dataFine?: string;
}

export interface Produzione {
  id: string;
  imbarcazioneId: string;
  imbarcazioneNome: string;
  clienteNome: string;
  faseCorrente: FaseProduzione;
  percentualeCompletamento: number;
  dataInizioLavori: string;
  dataConsegnaPrevista: string;
  responsabile: string;
  fasi: FaseAvanzamento[];
  note?: string;
}
