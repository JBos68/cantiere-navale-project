export type CategoriaFornitore = 'Materiali' | 'Motori' | 'Elettronica' | 'Arredo' | 'Servizi' | 'Varie';

export interface Fornitore {
  id: string;
  ragioneSociale: string;
  categoria: CategoriaFornitore;
  paese: string;
  citta: string;
  contatto: string;
  email: string;
  telefono: string;
  partitaIva: string;
  affidabilita: number;
  attivo: boolean;
}
