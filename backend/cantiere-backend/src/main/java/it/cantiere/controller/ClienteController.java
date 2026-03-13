package it.cantiere.controller;

import it.cantiere.model.Cliente;
import it.cantiere.repository.ClienteRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import java.util.List;

@RestController
@RequestMapping("/api/clienti")
public class ClienteController {

    private final ClienteRepository repo;

    public ClienteController(ClienteRepository repo) {
        this.repo = repo;
    }

    @GetMapping
    public List<Cliente> getAll() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    public Cliente getById(@PathVariable Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente non trovato: " + id));
    }

    @PostMapping
    public ResponseEntity<Cliente> create(@Valid @RequestBody Cliente cliente) {
        if (cliente.getAcquistatoDal() == null) {
            cliente.setAcquistatoDal(java.time.LocalDate.now());
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(repo.save(cliente));
    }

    @PutMapping("/{id}")
    public Cliente update(@PathVariable Long id, @Valid @RequestBody Cliente updated) {
        Cliente existing = repo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente non trovato: " + id));
        existing.setNome(updated.getNome());
        existing.setCognome(updated.getCognome());
        existing.setEmail(updated.getEmail());
        existing.setTelefono(updated.getTelefono());
        existing.setNazione(updated.getNazione());
        existing.setCitta(updated.getCitta());
        existing.setTipoCliente(updated.getTipoCliente());
        if (updated.getAcquistatoDal() != null) {
            existing.setAcquistatoDal(updated.getAcquistatoDal());
        }
        return repo.save(existing);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        if (!repo.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente non trovato: " + id);
        }
        repo.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}
