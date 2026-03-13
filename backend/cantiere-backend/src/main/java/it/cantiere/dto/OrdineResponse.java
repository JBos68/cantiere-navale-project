package it.cantiere.dto;

import it.cantiere.model.Ordine;
import it.cantiere.model.Ordine.StatoOrdine;
import java.time.LocalDate;

public class OrdineResponse {

    private Long id;
    private String numero;
    private Long clienteId;
    private String clienteNome;
    private Long imbarcazioneId;
    private String imbarcazioneNome;
    private LocalDate dataOrdine;
    private LocalDate dataConsegna;
    private double valore;
    private double acconto;
    private StatoOrdine stato;
    private String note;

    public static OrdineResponse from(Ordine o) {
        OrdineResponse r = new OrdineResponse();
        r.id = o.getId();
        r.numero = o.getNumero();
        r.dataOrdine = o.getDataOrdine();
        r.dataConsegna = o.getDataConsegna();
        r.valore = o.getValore();
        r.acconto = o.getAcconto();
        r.stato = o.getStato();
        r.note = o.getNote();
        if (o.getCliente() != null) {
            r.clienteId = o.getCliente().getId();
            r.clienteNome = o.getCliente().getNome() + " " + o.getCliente().getCognome();
        }
        if (o.getImbarcazione() != null) {
            r.imbarcazioneId = o.getImbarcazione().getId();
            r.imbarcazioneNome = o.getImbarcazione().getNome();
        }
        return r;
    }

    // --- Getters ---
    public Long getId() { return id; }
    public String getNumero() { return numero; }
    public Long getClienteId() { return clienteId; }
    public String getClienteNome() { return clienteNome; }
    public Long getImbarcazioneId() { return imbarcazioneId; }
    public String getImbarcazioneNome() { return imbarcazioneNome; }
    public LocalDate getDataOrdine() { return dataOrdine; }
    public LocalDate getDataConsegna() { return dataConsegna; }
    public double getValore() { return valore; }
    public double getAcconto() { return acconto; }
    public StatoOrdine getStato() { return stato; }
    public String getNote() { return note; }
}
