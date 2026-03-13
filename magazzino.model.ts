export type CategoriaMateria = 'Legname' | 'Metalli' | 'Vetroresina' | 'Motori' | 'Elettronica' | 'Arredo' | 'Verniciatura' | 'Varie';

export interface ArticoloMagazzino {
  id: string;
  codice: string;
  descrizione: string;
  categoria: CategoriaMateria;
  quantita: number;
  unitaMisura: string;
  giacenzaMinima: number;
  prezzoUnitario: number;
  fornitoreId: string;
  fornitoreNome: string;
  ultimoRiordino: string;
}
