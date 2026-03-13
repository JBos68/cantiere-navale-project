package it.cantiere.config;

import it.cantiere.model.Cliente;
import it.cantiere.model.Cliente.TipoCliente;
import it.cantiere.model.Imbarcazione;
import it.cantiere.model.Imbarcazione.TipoImbarcazione;
import it.cantiere.model.Imbarcazione.StatoImbarcazione;
import it.cantiere.model.Ordine;
import it.cantiere.model.Ordine.StatoOrdine;
import it.cantiere.repository.ClienteRepository;
import it.cantiere.repository.ImbarcazioneRepository;
import it.cantiere.repository.OrdineRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.time.LocalDate;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner seedDatabase(ClienteRepository clienteRepo,
                                   ImbarcazioneRepository imbRepo,
                                   OrdineRepository ordRepo) {
        return args -> {
            // Esegue il seed solo se il DB è vuoto
            if (clienteRepo.count() > 0) return;

            // --- Clienti ---
            Cliente c1 = new Cliente();
            c1.setNome("Mario"); c1.setCognome("Rossi"); c1.setEmail("mario.rossi@mail.it");
            c1.setTelefono("+39 333 1234567"); c1.setNazione("Italia"); c1.setCitta("Roma");
            c1.setTipoCliente(TipoCliente.PRIVATO); c1.setAcquistatoDal(LocalDate.of(2020, 3, 15));
            c1 = clienteRepo.save(c1);

            Cliente c2 = new Cliente();
            c2.setNome("Luca"); c2.setCognome("Ferrari"); c2.setEmail("l.ferrari@mail.it");
            c2.setTelefono("+39 347 9876543"); c2.setNazione("Italia"); c2.setCitta("Milano");
            c2.setTipoCliente(TipoCliente.PRIVATO); c2.setAcquistatoDal(LocalDate.of(2022, 7, 20));
            c2 = clienteRepo.save(c2);

            Cliente c3 = new Cliente();
            c3.setNome("Firm"); c3.setCognome("GmbH"); c3.setEmail("info@firmgmbh.de");
            c3.setTelefono("+49 30 12345678"); c3.setNazione("Germania"); c3.setCitta("Monaco");
            c3.setTipoCliente(TipoCliente.AZIENDA); c3.setAcquistatoDal(LocalDate.of(2019, 1, 10));
            c3 = clienteRepo.save(c3);

            Cliente c4 = new Cliente();
            c4.setNome("Sheikh"); c4.setCognome("Al Rashid"); c4.setEmail("alrashid@royal.ae");
            c4.setTelefono("+971 50 9999999"); c4.setNazione("UAE"); c4.setCitta("Dubai");
            c4.setTipoCliente(TipoCliente.PRIVATO); c4.setAcquistatoDal(LocalDate.of(2024, 11, 1));
            c4 = clienteRepo.save(c4);

            Cliente c5 = new Cliente();
            c5.setNome("Chateau"); c5.setCognome("Group"); c5.setEmail("fleet@chateaugroup.fr");
            c5.setTelefono("+33 1 45678901"); c5.setNazione("Francia"); c5.setCitta("Parigi");
            c5.setTipoCliente(TipoCliente.AZIENDA); c5.setAcquistatoDal(LocalDate.of(2021, 5, 30));
            c5 = clienteRepo.save(c5);

            Cliente c6 = new Cliente();
            c6.setNome("Marina"); c6.setCognome("Club Roma"); c6.setEmail("admin@marinaclub.it");
            c6.setTelefono("+39 06 44556677"); c6.setNazione("Italia"); c6.setCitta("Roma");
            c6.setTipoCliente(TipoCliente.AZIENDA); c6.setAcquistatoDal(LocalDate.of(2018, 6, 1));
            c6 = clienteRepo.save(c6);

            // --- Imbarcazioni ---
            Imbarcazione i1 = new Imbarcazione();
            i1.setNome("Azzurra I"); i1.setTipo(TipoImbarcazione.BARCA_A_VELA);
            i1.setLunghezzaMt(12); i1.setAnno(2024); i1.setStato(StatoImbarcazione.IN_COSTRUZIONE);
            i1.setMateriale("Vetroresina"); i1.setClienteNome("Mario Rossi"); i1.setPrezzo(85000);
            i1 = imbRepo.save(i1);

            Imbarcazione i2 = new Imbarcazione();
            i2.setNome("Neptune X"); i2.setTipo(TipoImbarcazione.MOTOSCAFO);
            i2.setLunghezzaMt(8); i2.setAnno(2025); i2.setStato(StatoImbarcazione.COMPLETATA);
            i2.setMateriale("Alluminio"); i2.setClienteNome("Firm GmbH"); i2.setPrezzo(120000);
            i2 = imbRepo.save(i2);

            Imbarcazione i3 = new Imbarcazione();
            i3.setNome("Galeone Blu"); i3.setTipo(TipoImbarcazione.PANFILO);
            i3.setLunghezzaMt(34); i3.setAnno(2025); i3.setStato(StatoImbarcazione.IN_COSTRUZIONE);
            i3.setMateriale("Acciaio e legno"); i3.setClienteNome("Sheikh Al Rashid"); i3.setPrezzo(2800000);
            i3 = imbRepo.save(i3);

            Imbarcazione i4 = new Imbarcazione();
            i4.setNome("Sirena"); i4.setTipo(TipoImbarcazione.CATAMARANO);
            i4.setLunghezzaMt(15); i4.setAnno(2024); i4.setStato(StatoImbarcazione.IN_CONSEGNA);
            i4.setMateriale("Vetroresina"); i4.setClienteNome("Luca Ferrari"); i4.setPrezzo(310000);
            i4 = imbRepo.save(i4);

            Imbarcazione i5 = new Imbarcazione();
            i5.setNome("Poseidon VII"); i5.setTipo(TipoImbarcazione.YACHT);
            i5.setLunghezzaMt(22); i5.setAnno(2024); i5.setStato(StatoImbarcazione.COMPLETATA);
            i5.setMateriale("Fibra di carbonio"); i5.setClienteNome("Chateau Group"); i5.setPrezzo(950000);
            i5 = imbRepo.save(i5);

            Imbarcazione i6 = new Imbarcazione();
            i6.setNome("Medusa"); i6.setTipo(TipoImbarcazione.GOMMONE);
            i6.setLunghezzaMt(6); i6.setAnno(2025); i6.setStato(StatoImbarcazione.IN_COSTRUZIONE);
            i6.setMateriale("PVC/Hypalon"); i6.setClienteNome("Marina Club Roma"); i6.setPrezzo(28000);
            i6 = imbRepo.save(i6);

            // --- Ordini ---
            Ordine o1 = new Ordine();
            o1.setNumero("ORD-2025-001"); o1.setCliente(c1); o1.setImbarcazione(i1);
            o1.setDataOrdine(LocalDate.of(2024, 3, 10)); o1.setDataConsegna(LocalDate.of(2025, 6, 30));
            o1.setValore(85000); o1.setAcconto(25000); o1.setStato(StatoOrdine.IN_LAVORAZIONE);
            ordRepo.save(o1);

            Ordine o2 = new Ordine();
            o2.setNumero("ORD-2025-002"); o2.setCliente(c3); o2.setImbarcazione(i2);
            o2.setDataOrdine(LocalDate.of(2024, 5, 20)); o2.setDataConsegna(LocalDate.of(2025, 3, 15));
            o2.setValore(120000); o2.setAcconto(60000); o2.setStato(StatoOrdine.COMPLETATO);
            ordRepo.save(o2);

            Ordine o3 = new Ordine();
            o3.setNumero("ORD-2025-003"); o3.setCliente(c4); o3.setImbarcazione(i3);
            o3.setDataOrdine(LocalDate.of(2024, 11, 1)); o3.setDataConsegna(LocalDate.of(2026, 12, 31));
            o3.setValore(2800000); o3.setAcconto(840000); o3.setStato(StatoOrdine.IN_LAVORAZIONE);
            ordRepo.save(o3);

            Ordine o4 = new Ordine();
            o4.setNumero("ORD-2025-004"); o4.setCliente(c2); o4.setImbarcazione(i4);
            o4.setDataOrdine(LocalDate.of(2024, 1, 15)); o4.setDataConsegna(LocalDate.of(2025, 4, 1));
            o4.setValore(310000); o4.setAcconto(155000); o4.setStato(StatoOrdine.CONSEGNATO);
            ordRepo.save(o4);

            Ordine o5 = new Ordine();
            o5.setNumero("ORD-2025-005"); o5.setCliente(c5); o5.setImbarcazione(i5);
            o5.setDataOrdine(LocalDate.of(2023, 8, 10)); o5.setDataConsegna(LocalDate.of(2024, 12, 31));
            o5.setValore(950000); o5.setAcconto(475000); o5.setStato(StatoOrdine.CONSEGNATO);
            ordRepo.save(o5);

            Ordine o6 = new Ordine();
            o6.setNumero("ORD-2025-006"); o6.setCliente(c6); o6.setImbarcazione(i6);
            o6.setDataOrdine(LocalDate.of(2025, 1, 10)); o6.setDataConsegna(LocalDate.of(2025, 7, 30));
            o6.setValore(28000); o6.setAcconto(10000); o6.setStato(StatoOrdine.IN_LAVORAZIONE);
            ordRepo.save(o6);

            System.out.println("✅ DataSeeder: dati iniziali caricati nel database.");
        };
    }
}
