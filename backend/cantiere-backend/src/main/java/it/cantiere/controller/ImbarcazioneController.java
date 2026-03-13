package it.cantiere.controller;

import it.cantiere.model.Imbarcazione;
import it.cantiere.repository.ImbarcazioneRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@RestController
@RequestMapping("/api/imbarcazioni")
public class ImbarcazioneController {

    private final ImbarcazioneRepository repo;

    public ImbarcazioneController(ImbarcazioneRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Imbarcazione> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Imbarcazione getById(@PathVariable Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Imbarcazione non trovata: " + id));
    }

    @PostMapping
    public ResponseEntity<Imbarcazione> create(@Valid @RequestBody Imbarcazione imb) {
        return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(imb));
    }

    @PutMapping("/{id}")
    public Imbarcazione update(@PathVariable Long id, @Valid @RequestBody Imbarcazione updated) {
        Imbarcazione existing = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Imbarcazione non trovata: " + id));
        existing.setNome(updated.getNome());
        existing.setTipo(updated.getTipo());
        existing.setLunghezzaMt(updated.getLunghezzaMt());
        existing.setAnno(updated.getAnno());
        existing.setStato(updated.getStato());
        existing.setMateriale(updated.getMateriale());
        existing.setClienteNome(updated.getClienteNome());
        existing.setPrezzo(updated.getPrezzo());
        existing.setDescrizione(updated.getDescrizione());
        return repo.save(existing);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Imbarcazione non trovata: " + id);
        }
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
