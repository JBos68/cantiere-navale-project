export type Ruolo =
  | 'Carpentiere' | 'Falegname' | 'Motorista' | 'Elettricista'
  | 'Progettista' | 'Project Manager' | 'Verniciatore'
  | 'Velista' | 'Amministrativo' | 'Direttore';

export type Reparto = 'Produzione' | 'Progettazione' | 'Amministrazione' | 'Logistica' | 'Direzione';

export interface Dipendente {
  id: string;
  nome: string;
  cognome: string;
  ruolo: Ruolo;
  reparto: Reparto;
  email: string;
  telefono: string;
  dataAssunzione: string;
  oreSettimanali: number;
  attivo: boolean;
}
