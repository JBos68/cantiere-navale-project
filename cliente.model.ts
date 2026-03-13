export interface Cliente {
  id: string;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  nazione: string;
  citta: string;
  tipoCliente: 'Privato' | 'Azienda';
  ordini: number;
  acquistatoDal: string;
}
