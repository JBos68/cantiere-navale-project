package it.cantiere.repository;

import it.cantiere.model.Imbarcazione;
import it.cantiere.model.Imbarcazione.StatoImbarcazione;
import it.cantiere.model.Imbarcazione.TipoImbarcazione;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ImbarcazioneRepository extends JpaRepository<Imbarcazione, Long> {
    List<Imbarcazione> findByTipo(TipoImbarcazione tipo);
    List<Imbarcazione> findByStato(StatoImbarcazione stato);
}
