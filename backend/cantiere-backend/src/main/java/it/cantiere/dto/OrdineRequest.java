package it.cantiere.dto;

import it.cantiere.model.Ordine.StatoOrdine;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import java.time.LocalDate;

public class OrdineRequest {

    @NotNull
    private Long clienteId;

    @NotNull
    private Long imbarcazioneId;

    @NotNull
    private LocalDate dataOrdine;

    private LocalDate dataConsegna;

    @Positive
    private double valore;

    private double acconto;

    private StatoOrdine stato;

    private String note;

    // --- Getters & Setters ---
    public Long getClienteId() { return clienteId; }
    public void setClienteId(Long clienteId) { this.clienteId = clienteId; }

    public Long getImbarcazioneId() { return imbarcazioneId; }
    public void setImbarcazioneId(Long imbarcazioneId) { this.imbarcazioneId = imbarcazioneId; }

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
