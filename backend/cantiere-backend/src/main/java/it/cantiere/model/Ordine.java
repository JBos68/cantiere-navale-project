package it.cantiere.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.time.LocalDate;

@Entity
@Table(name = "ordini")
public class Ordine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String numero;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_id")
    private Cliente cliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "imbarcazione_id")
    private Imbarcazione imbarcazione;

    @NotNull
    private LocalDate dataOrdine;

    private LocalDate dataConsegna;

    @Positive
    private double valore;

    private double acconto;

    @Enumerated(EnumType.STRING)
    private StatoOrdine stato = StatoOrdine.IN_ATTESA;

    @Column(length = 1000)
    private String note;

    public enum StatoOrdine {
        IN_ATTESA, IN_LAVORAZIONE, COMPLETATO, CONSEGNATO, ANNULLATO
    }

    // --- Constructors ---
    public Ordine() {}

    // --- Getters & Setters ---
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getNumero() { return numero; }
    public void setNumero(String numero) { this.numero = numero; }

    public Cliente getCliente() { return cliente; }
    public void setCliente(Cliente cliente) { this.cliente = cliente; }

    public Imbarcazione getImbarcazione() { return imbarcazione; }
    public void setImbarcazione(Imbarcazione imbarcazione) { this.imbarcazione = imbarcazione; }

    public LocalDate getDataOrdine() { return dataOrdine; }
    public void setDataOrdine(LocalDate dataOrdine) { this.dataOrdine = dataOrdine; }

    public LocalDate getDataConsegna() { return dataConsegna; }
    public void setDataConsegna(LocalDate dataConsegna) { this.dataConsegna = dataConsegna; }

    public double getValore() { return valore; }
    public void setValore(double valore) { this.valore = valore; }

    public double getAcconto() { return acconto; }
    public void setAcconto(double acconto) { this.acconto = acconto; }

    public StatoOrdine getStato() { return stato; }
    public void setStato(StatoOrdine stato) { this.stato = stato; }

    public String getNote() { return note; }
    public void setNote(String note) { this.note = note; }
}
