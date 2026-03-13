export type TipoImbarcazione = 'Barca a Vela' | 'Motoscafo' | 'Yacht' | 'Panfilo' | 'Catamarano' | 'Gommone';
export type StatoImbarcazione = 'In costruzione' | 'Completata' | 'In consegna' | 'Venduta' | 'In esposizione';

export interface Imbarcazione {
  id: string;
  nome: string;
  tipo: TipoImbarcazione;
  lunghezzaMt: number;
  anno: number;
  stato: StatoImbarcazione;
  materiale: string;
  cliente?: string;
  prezzo: number;
  descrizione?: string;
}
