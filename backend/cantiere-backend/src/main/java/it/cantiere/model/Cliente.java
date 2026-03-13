package it.cantiere.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;

@Entity
@Table(name = "clienti")
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String nome;

    @NotBlank
    private String cognome;

    @Email
    @NotBlank
    @Column(unique = true)
    private String email;

    private String telefono;

    @NotBlank
    private String nazione;

    private String citta;

    @Enumerated(EnumType.STRING)
    private TipoCliente tipoCliente = TipoCliente.PRIVATO;

    private LocalDate acquistatoDal;

    public enum TipoCliente { PRIVATO, AZIENDA }

    // --- Constructors ---
    public Cliente() {}

    // --- Getters & Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public String getCognome() { return cognome; }
    public void setCognome(String cognome) { this.cognome = cognome; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getTelefono() { return telefono; }
    public void setTelefono(String telefono) { this.telefono = telefono; }

    public String getNazione() { return nazione; }
    public void setNazione(String nazione) { this.nazione = nazione; }

    public String getCitta() { return citta; }
    public void setCitta(String citta) { this.citta = citta; }

    public TipoCliente getTipoCliente() { return tipoCliente; }
    public void setTipoCliente(TipoCliente tipoCliente) { this.tipoCliente = tipoCliente; }

    public LocalDate getAcquistatoDal() { return acquistatoDal; }
    public void setAcquistatoDal(LocalDate acquistatoDal) { this.acquistatoDal = acquistatoDal; }
}
