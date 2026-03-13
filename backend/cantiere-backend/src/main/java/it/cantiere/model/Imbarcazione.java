package it.cantiere.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;

@Entity
@Table(name = "imbarcazioni")
public class Imbarcazione {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String nome;

    @Enumerated(EnumType.STRING)
    @NotNull
    private TipoImbarcazione tipo;

    @Positive
    private double lunghezzaMt;

    private int anno;

    @Enumerated(EnumType.STRING)
    private StatoImbarcazione stato = StatoImbarcazione.IN_COSTRUZIONE;

    private String materiale;

    /** Nome del cliente (denormalizzato per semplicità) */
    private String clienteNome;

    @Positive
    private double prezzo;

    private String descrizione;

    public enum TipoImbarcazione {
        BARCA_A_VELA, MOTOSCAFO, YACHT, PANFILO, CATAMARANO, GOMMONE
    }

    public enum StatoImbarcazione {
        IN_COSTRUZIONE, COMPLETATA, IN_CONSEGNA, VENDUTA, IN_ESPOSIZIONE
    }

    // --- Constructors ---
    public Imbarcazione() {}

    // --- Getters & Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNome() { return nome; }
    public void setNome(String nome) { this.nome = nome; }

    public TipoImbarcazione getTipo() { return tipo; }
    public void setTipo(TipoImbarcazione tipo) { this.tipo = tipo; }

    public double getLunghezzaMt() { return lunghezzaMt; }
    public void setLunghezzaMt(double lunghezzaMt) { this.lunghezzaMt = lunghezzaMt; }

    public int getAnno() { return anno; }
    public void setAnno(int anno) { this.anno = anno; }

    public StatoImbarcazione getStato() { return stato; }
    public void setStato(StatoImbarcazione stato) { this.stato = stato; }

    public String getMateriale() { return materiale; }
    public void setMateriale(String materiale) { this.materiale = materiale; }

    public String getClienteNome() { return clienteNome; }
    public void setClienteNome(String clienteNome) { this.clienteNome = clienteNome; }

    public double getPrezzo() { return prezzo; }
    public void setPrezzo(double prezzo) { this.prezzo = prezzo; }

    public String getDescrizione() { return descrizione; }
    public void setDescrizione(String descrizione) { this.descrizione = descrizione; }
}
