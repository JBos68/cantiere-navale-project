import { Injectable } from '@angular/core';
import { Imbarcazione } from '../models/imbarcazione.model';
import { Cliente } from '../models/cliente.model';
import { Ordine } from '../models/ordine.model';
import { Produzione } from '../models/produzione.model';
import { ArticoloMagazzino } from '../models/magazzino.model';
import { Fornitore } from '../models/fornitore.model';
import { Dipendente } from '../models/personale.model';

@Injectable({ providedIn: 'root' })
export class MockDataService {

  getImbarcazioni(): Imbarcazione[] {
    return [
      { id: '1', nome: 'Azzurra I', tipo: 'Barca a Vela', lunghezzaMt: 12, anno: 2024, stato: 'In costruzione', materiale: 'Vetroresina', cliente: 'Mario Rossi', prezzo: 85000 },
      { id: '2', nome: 'Neptune X', tipo: 'Motoscafo', lunghezzaMt: 8, anno: 2025, stato: 'Completata', materiale: 'Alluminio', cliente: 'Firm GmbH', prezzo: 120000 },
      { id: '3', nome: 'Galeone Blu', tipo: 'Panfilo', lunghezzaMt: 34, anno: 2025, stato: 'In costruzione', materiale: 'Acciaio e legno', cliente: 'Sheikh Al Rashid', prezzo: 2800000 },
      { id: '4', nome: 'Sirena', tipo: 'Catamarano', lunghezzaMt: 15, anno: 2024, stato: 'In consegna', materiale: 'Vetroresina', cliente: 'Luca Ferrari', prezzo: 310000 },
      { id: '5', nome: 'Poseidon VII', tipo: 'Yacht', lunghezzaMt: 22, anno: 2024, stato: 'Completata', materiale: 'Fibra di carbonio', cliente: 'Chateau Group', prezzo: 950000 },
      { id: '6', nome: 'Medusa', tipo: 'Gommone', lunghezzaMt: 6, anno: 2025, stato: 'In costruzione', materiale: 'PVC/Hypalon', cliente: 'Marina Club Roma', prezzo: 28000 },
      { id: '7', nome: 'Aurora Borealis', tipo: 'Yacht', lunghezzaMt: 28, anno: 2026, stato: 'In costruzione', materiale: 'Vetroresina', cliente: 'Ivan Petrov', prezzo: 1500000 },
      { id: '8', nome: 'Costa Smeralda', tipo: 'Motoscafo', lunghezzaMt: 11, anno: 2025, stato: 'In esposizione', materiale: 'Alluminio', prezzo: 230000 },
    ];
  }

  getClienti(): Cliente[] {
    return [
      { id: '1', nome: 'Mario', cognome: 'Rossi', email: 'mario.rossi@mail.it', telefono: '+39 333 1234567', nazione: 'Italia', citta: 'Roma', tipoCliente: 'Privato', ordini: 2, acquistatoDal: '2020-03-15' },
      { id: '2', nome: 'Luca', cognome: 'Ferrari', email: 'l.ferrari@mail.it', telefono: '+39 347 9876543', nazione: 'Italia', citta: 'Milano', tipoCliente: 'Privato', ordini: 1, acquistatoDal: '2022-07-20' },
      { id: '3', nome: 'Firm', cognome: 'GmbH', email: 'info@firmgmbh.de', telefono: '+49 30 12345678', nazione: 'Germania', citta: 'Monaco', tipoCliente: 'Azienda', ordini: 3, acquistatoDal: '2019-01-10' },
      { id: '4', nome: 'Sheikh', cognome: 'Al Rashid', email: 'alrashid@royal.ae', telefono: '+971 50 9999999', nazione: 'UAE', citta: 'Dubai', tipoCliente: 'Privato', ordini: 1, acquistatoDal: '2024-11-01' },
      { id: '5', nome: 'Chateau', cognome: 'Group', email: 'fleet@chateaugroup.fr', telefono: '+33 1 45678901', nazione: 'Francia', citta: 'Parigi', tipoCliente: 'Azienda', ordini: 2, acquistatoDal: '2021-05-30' },
      { id: '6', nome: 'Ivan', cognome: 'Petrov', email: 'petrov@priv.ru', telefono: '+7 916 1234567', nazione: 'Russia', citta: 'Mosca', tipoCliente: 'Privato', ordini: 1, acquistatoDal: '2025-02-14' },
      { id: '7', nome: 'Marina', cognome: 'Club Roma', email: 'admin@marinaclub.it', telefono: '+39 06 44556677', nazione: 'Italia', citta: 'Roma', tipoCliente: 'Azienda', ordini: 4, acquistatoDal: '2018-06-01' },
    ];
  }

  getOrdini(): Ordine[] {
    return [
      { id: '1', numero: 'ORD-2025-001', clienteId: '1', clienteNome: 'Mario Rossi', imbarcazioneId: '1', imbarcazioneNome: 'Azzurra I', dataOrdine: '2024-03-10', dataConsegna: '2025-06-30', valore: 85000, stato: 'In lavorazione', acconto: 25000 },
      { id: '2', numero: 'ORD-2025-002', clienteId: '3', clienteNome: 'Firm GmbH', imbarcazioneId: '2', imbarcazioneNome: 'Neptune X', dataOrdine: '2024-05-20', dataConsegna: '2025-03-15', valore: 120000, stato: 'Completato', acconto: 60000 },
      { id: '3', numero: 'ORD-2025-003', clienteId: '4', clienteNome: 'Sheikh Al Rashid', imbarcazioneId: '3', imbarcazioneNome: 'Galeone Blu', dataOrdine: '2024-11-01', dataConsegna: '2026-12-31', valore: 2800000, stato: 'In lavorazione', acconto: 840000 },
      { id: '4', numero: 'ORD-2025-004', clienteId: '2', clienteNome: 'Luca Ferrari', imbarcazioneId: '4', imbarcazioneNome: 'Sirena', dataOrdine: '2024-01-15', dataConsegna: '2025-04-01', valore: 310000, stato: 'Consegnato', acconto: 155000 },
      { id: '5', numero: 'ORD-2025-005', clienteId: '5', clienteNome: 'Chateau Group', imbarcazioneId: '5', imbarcazioneNome: 'Poseidon VII', dataOrdine: '2023-08-10', dataConsegna: '2024-12-31', valore: 950000, stato: 'Consegnato', acconto: 475000 },
      { id: '6', numero: 'ORD-2025-006', clienteId: '7', clienteNome: 'Marina Club Roma', imbarcazioneId: '6', imbarcazioneNome: 'Medusa', dataOrdine: '2025-01-10', dataConsegna: '2025-07-30', valore: 28000, stato: 'In lavorazione', acconto: 10000 },
      { id: '7', numero: 'ORD-2025-007', clienteId: '6', clienteNome: 'Ivan Petrov', imbarcazioneId: '7', imbarcazioneNome: 'Aurora Borealis', dataOrdine: '2025-02-14', dataConsegna: '2026-09-30', valore: 1500000, stato: 'In attesa', acconto: 300000 },
    ];
  }

  getProduzione(): Produzione[] {
    return [
      {
        id: '1', imbarcazioneId: '1', imbarcazioneNome: 'Azzurra I', clienteNome: 'Mario Rossi',
        faseCorrente: 'Allestimento', percentualeCompletamento: 65,
        dataInizioLavori: '2024-04-01', dataConsegnaPrevista: '2025-06-30', responsabile: 'Giovanni Marini',
        fasi: [
          { nome: 'Progettazione', completata: true, dataInizio: '2024-04-01', dataFine: '2024-05-15' },
          { nome: 'Costruzione scafo', completata: true, dataInizio: '2024-05-16', dataFine: '2024-09-30' },
          { nome: 'Allestimento', completata: false, dataInizio: '2024-10-01' },
          { nome: 'Motorizzazione', completata: false },
          { nome: 'Verniciatura', completata: false },
          { nome: 'Collaudo', completata: false },
          { nome: 'Consegna', completata: false },
        ]
      },
      {
        id: '2', imbarcazioneId: '3', imbarcazioneNome: 'Galeone Blu', clienteNome: 'Sheikh Al Rashid',
        faseCorrente: 'Costruzione scafo', percentualeCompletamento: 25,
        dataInizioLavori: '2024-12-01', dataConsegnaPrevista: '2026-12-31', responsabile: 'Marco Santini',
        fasi: [
          { nome: 'Progettazione', completata: true, dataInizio: '2024-12-01', dataFine: '2025-02-28' },
          { nome: 'Costruzione scafo', completata: false, dataInizio: '2025-03-01' },
          { nome: 'Allestimento', completata: false },
          { nome: 'Motorizzazione', completata: false },
          { nome: 'Verniciatura', completata: false },
          { nome: 'Collaudo', completata: false },
          { nome: 'Consegna', completata: false },
        ]
      },
      {
        id: '3', imbarcazioneId: '6', imbarcazioneNome: 'Medusa', clienteNome: 'Marina Club Roma',
        faseCorrente: 'Allestimento', percentualeCompletamento: 50,
        dataInizioLavori: '2025-01-15', dataConsegnaPrevista: '2025-07-30', responsabile: 'Luigi Testa',
        fasi: [
          { nome: 'Progettazione', completata: true, dataInizio: '2025-01-15', dataFine: '2025-01-31' },
          { nome: 'Costruzione scafo', completata: true, dataInizio: '2025-02-01', dataFine: '2025-03-31' },
          { nome: 'Allestimento', completata: false, dataInizio: '2025-04-01' },
          { nome: 'Motorizzazione', completata: false },
          { nome: 'Verniciatura', completata: false },
          { nome: 'Collaudo', completata: false },
          { nome: 'Consegna', completata: false },
        ]
      },
      {
        id: '4', imbarcazioneId: '7', imbarcazioneNome: 'Aurora Borealis', clienteNome: 'Ivan Petrov',
        faseCorrente: 'Progettazione', percentualeCompletamento: 10,
        dataInizioLavori: '2025-03-01', dataConsegnaPrevista: '2026-09-30', responsabile: 'Elena Ricci',
        fasi: [
          { nome: 'Progettazione', completata: false, dataInizio: '2025-03-01' },
          { nome: 'Costruzione scafo', completata: false },
          { nome: 'Allestimento', completata: false },
          { nome: 'Motorizzazione', completata: false },
          { nome: 'Verniciatura', completata: false },
          { nome: 'Collaudo', completata: false },
          { nome: 'Consegna', completata: false },
        ]
      },
    ];
  }

  getMagazzino(): ArticoloMagazzino[] {
    return [
      { id: '1', codice: 'LEG-001', descrizione: 'Mogano pregiato', categoria: 'Legname', quantita: 450, unitaMisura: 'kg', giacenzaMinima: 200, prezzoUnitario: 12.5, fornitoreId: '1', fornitoreNome: 'Legnami Bianchi', ultimoRiordino: '2025-02-01' },
      { id: '2', codice: 'VTR-001', descrizione: 'Vetroresina 600g/m²', categoria: 'Vetroresina', quantita: 1200, unitaMisura: 'm²', giacenzaMinima: 500, prezzoUnitario: 8.0, fornitoreId: '2', fornitoreNome: 'CompositItalia', ultimoRiordino: '2025-01-15' },
      { id: '3', codice: 'MTL-001', descrizione: 'Lamiere acciaio inox', categoria: 'Metalli', quantita: 230, unitaMisura: 'kg', giacenzaMinima: 300, prezzoUnitario: 6.8, fornitoreId: '3', fornitoreNome: 'MetalMare', ultimoRiordino: '2025-01-20' },
      { id: '4', codice: 'MOT-001', descrizione: 'Motore Yanmar 200CV', categoria: 'Motori', quantita: 3, unitaMisura: 'pz', giacenzaMinima: 1, prezzoUnitario: 18500, fornitoreId: '4', fornitoreNome: 'Marine Engines SRL', ultimoRiordino: '2025-02-10' },
      { id: '5', codice: 'ELE-001', descrizione: 'Pannello elettrico nautico', categoria: 'Elettronica', quantita: 12, unitaMisura: 'pz', giacenzaMinima: 5, prezzoUnitario: 1200, fornitoreId: '5', fornitoreNome: 'ElettroNave', ultimoRiordino: '2025-01-28' },
      { id: '6', codice: 'VRN-001', descrizione: 'Vernice epossidica bianca', categoria: 'Verniciatura', quantita: 85, unitaMisura: 'lt', giacenzaMinima: 50, prezzoUnitario: 45, fornitoreId: '6', fornitoreNome: 'ColoriMare', ultimoRiordino: '2025-02-05' },
      { id: '7', codice: 'ARR-001', descrizione: 'Seduta timoneria pelle', categoria: 'Arredo', quantita: 8, unitaMisura: 'pz', giacenzaMinima: 3, prezzoUnitario: 890, fornitoreId: '7', fornitoreNome: 'Interior Nautico', ultimoRiordino: '2025-01-10' },
    ];
  }

  getFornitori(): Fornitore[] {
    return [
      { id: '1', ragioneSociale: 'Legnami Bianchi SRL', categoria: 'Materiali', paese: 'Italia', citta: 'Venezia', contatto: 'Andrea Bianchi', email: 'info@legnamibianchi.it', telefono: '+39 041 1234567', partitaIva: 'IT01234567890', affidabilita: 5, attivo: true },
      { id: '2', ragioneSociale: 'CompositItalia SpA', categoria: 'Materiali', paese: 'Italia', citta: 'Genova', contatto: 'Roberto Composit', email: 'sales@composit.it', telefono: '+39 010 9876543', partitaIva: 'IT09876543210', affidabilita: 4, attivo: true },
      { id: '3', ragioneSociale: 'MetalMare SRL', categoria: 'Materiali', paese: 'Italia', citta: 'La Spezia', contatto: 'Fabio Metalli', email: 'order@metalmare.it', telefono: '+39 0187 654321', partitaIva: 'IT06543217890', affidabilita: 4, attivo: true },
      { id: '4', ragioneSociale: 'Marine Engines SRL', categoria: 'Motori', paese: 'Giappone', citta: 'Osaka', contatto: 'Hiroshi Tanaka', email: 'export@marineengines.jp', telefono: '+81 6 12345678', partitaIva: 'JP8901234567', affidabilita: 5, attivo: true },
      { id: '5', ragioneSociale: 'ElettroNave Italia', categoria: 'Elettronica', paese: 'Italia', citta: 'Milano', contatto: 'Sara Elettro', email: 'info@elettronave.it', telefono: '+39 02 34567890', partitaIva: 'IT03456789012', affidabilita: 3, attivo: true },
      { id: '6', ragioneSociale: 'ColoriMare SpA', categoria: 'Materiali', paese: 'Olanda', citta: 'Rotterdam', contatto: 'Jan van der Berg', email: 'sales@colorimare.nl', telefono: '+31 10 1234567', partitaIva: 'NL123456789', affidabilita: 5, attivo: true },
      { id: '7', ragioneSociale: 'Interior Nautico SRL', categoria: 'Arredo', paese: 'Italia', citta: 'Napoli', contatto: 'Carmela Interni', email: 'info@interiornautico.it', telefono: '+39 081 9876543', partitaIva: 'IT07654321890', affidabilita: 4, attivo: false },
    ];
  }

  getPersonale(): Dipendente[] {
    return [
      { id: '1', nome: 'Giovanni', cognome: 'Marini', ruolo: 'Project Manager', reparto: 'Produzione', email: 'g.marini@cantiere.it', telefono: '+39 335 1111111', dataAssunzione: '2010-03-01', oreSettimanali: 40, attivo: true },
      { id: '2', nome: 'Marco', cognome: 'Santini', ruolo: 'Project Manager', reparto: 'Produzione', email: 'm.santini@cantiere.it', telefono: '+39 335 2222222', dataAssunzione: '2012-06-15', oreSettimanali: 40, attivo: true },
      { id: '3', nome: 'Luigi', cognome: 'Testa', ruolo: 'Carpentiere', reparto: 'Produzione', email: 'l.testa@cantiere.it', telefono: '+39 335 3333333', dataAssunzione: '2015-01-10', oreSettimanali: 40, attivo: true },
      { id: '4', nome: 'Elena', cognome: 'Ricci', ruolo: 'Progettista', reparto: 'Progettazione', email: 'e.ricci@cantiere.it', telefono: '+39 335 4444444', dataAssunzione: '2018-09-01', oreSettimanali: 38, attivo: true },
      { id: '5', nome: 'Franco', cognome: 'Neri', ruolo: 'Motorista', reparto: 'Produzione', email: 'f.neri@cantiere.it', telefono: '+39 335 5555555', dataAssunzione: '2016-04-20', oreSettimanali: 40, attivo: true },
      { id: '6', nome: 'Carla', cognome: 'Bianchi', ruolo: 'Elettricista', reparto: 'Produzione', email: 'c.bianchi@cantiere.it', telefono: '+39 335 6666666', dataAssunzione: '2019-11-01', oreSettimanali: 40, attivo: true },
      { id: '7', nome: 'Piero', cognome: 'Greco', ruolo: 'Verniciatore', reparto: 'Produzione', email: 'p.greco@cantiere.it', telefono: '+39 335 7777777', dataAssunzione: '2017-02-14', oreSettimanali: 40, attivo: true },
      { id: '8', nome: 'Anna', cognome: 'Mori', ruolo: 'Amministrativo', reparto: 'Amministrazione', email: 'a.mori@cantiere.it', telefono: '+39 335 8888888', dataAssunzione: '2014-07-01', oreSettimanali: 36, attivo: true },
      { id: '9', nome: 'Roberto', cognome: 'Costa', ruolo: 'Falegname', reparto: 'Produzione', email: 'r.costa@cantiere.it', telefono: '+39 335 9999999', dataAssunzione: '2020-03-01', oreSettimanali: 40, attivo: true },
      { id: '10', nome: 'Silvia', cognome: 'Fontana', ruolo: 'Direttore', reparto: 'Direzione', email: 's.fontana@cantiere.it', telefono: '+39 335 0000000', dataAssunzione: '2005-01-15', oreSettimanali: 40, attivo: true },
    ];
  }
}
