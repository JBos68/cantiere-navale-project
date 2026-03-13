package it.cantiere.controller;

import it.cantiere.dto.OrdineRequest;
import it.cantiere.dto.OrdineResponse;
import it.cantiere.model.Cliente;
import it.cantiere.model.Imbarcazione;
import it.cantiere.model.Ordine;
import it.cantiere.repository.ClienteRepository;
import it.cantiere.repository.ImbarcazioneRepository;
import it.cantiere.repository.OrdineRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/ordini")
public class OrdineController {

    private final OrdineRepository ordineRepo;
    private final ClienteRepository clienteRepo;
    private final ImbarcazioneRepository imbarcazioneRepo;

    public OrdineController(OrdineRepository ordineRepo,
                            ClienteRepository clienteRepo,
                            ImbarcazioneRepository imbarcazioneRepo) {
        this.ordineRepo = ordineRepo;
        this.clienteRepo = clienteRepo;
        this.imbarcazioneRepo = imbarcazioneRepo;
    }

    @GetMapping
    public List<OrdineResponse> getAll() {
        return ordineRepo.findAllWithDetails().stream()
                .map(OrdineResponse::from)
                .toList();
    }

    @GetMapping("/{id}")
    public OrdineResponse getById(@PathVariable Long id) {
        return ordineRepo.findByIdWithDetails(id)
                .map(OrdineResponse::from)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Ordine non trovato: " + id));
    }

    @PostMapping
    public ResponseEntity<OrdineResponse> create(@Valid @RequestBody OrdineRequest req) {
        Cliente cliente = clienteRepo.findById(req.getClienteId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente non trovato: " + req.getClienteId()));
        Imbarcazione imb = imbarcazioneRepo.findById(req.getImbarcazioneId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Imbarcazione non trovata: " + req.getImbarcazioneId()));

        Ordine o = new Ordine();
        o.setNumero(generateNumero());
        o.setCliente(cliente);
        o.setImbarcazione(imb);
        o.setDataOrdine(req.getDataOrdine());
        o.setDataConsegna(req.getDataConsegna());
        o.setValore(req.getValore());
        o.setAcconto(req.getAcconto());
        o.setStato(req.getStato() != null ? req.getStato() : Ordine.StatoOrdine.IN_ATTESA);
        o.setNote(req.getNote());

        Ordine saved = ordineRepo.save(o);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(OrdineResponse.from(saved));
    }

    @PutMapping("/{id}")
    public OrdineResponse update(@PathVariable Long id, @Valid @RequestBody OrdineRequest req) {
        Ordine o = ordineRepo.findByIdWithDetails(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Ordine non trovato: " + id));

        Cliente cliente = clienteRepo.findById(req.getClienteId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente non trovato: " + req.getClienteId()));
        Imbarcazione imb = imbarcazioneRepo.findById(req.getImbarcazioneId())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Imbarcazione non trovata: " + req.getImbarcazioneId()));

        o.setCliente(cliente);
        o.setImbarcazione(imb);
        o.setDataOrdine(req.getDataOrdine());
        o.setDataConsegna(req.getDataConsegna());
        o.setValore(req.getValore());
        o.setAcconto(req.getAcconto());
        if (req.getStato() != null) o.setStato(req.getStato());
        o.setNote(req.getNote());

        return OrdineResponse.from(ordineRepo.save(o));
    }

    @PatchMapping("/{id}/stato")
    public OrdineResponse updateStato(@PathVariable Long id,
                                      @RequestParam Ordine.StatoOrdine stato) {
        Ordine o = ordineRepo.findByIdWithDetails(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Ordine non trovato: " + id));
        o.setStato(stato);
        return OrdineResponse.from(ordineRepo.save(o));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!ordineRepo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Ordine non trovato: " + id);
        }
        ordineRepo.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    private String generateNumero() {
        String anno = String.valueOf(LocalDate.now().getYear());
        long count = ordineRepo.count() + 1;
        return String.format("ORD-%s-%03d", anno, count);
    }
}
