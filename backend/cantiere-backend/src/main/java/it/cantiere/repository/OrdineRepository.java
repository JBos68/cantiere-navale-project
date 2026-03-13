package it.cantiere.repository;

import it.cantiere.model.Ordine;
import it.cantiere.model.Ordine.StatoOrdine;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;

public interface OrdineRepository extends JpaRepository<Ordine, Long> {

    boolean existsByNumero(String numero);

    List<Ordine> findByStato(StatoOrdine stato);

    @Query("SELECT o FROM Ordine o JOIN FETCH o.cliente JOIN FETCH o.imbarcazione")
    List<Ordine> findAllWithDetails();

    @Query("SELECT o FROM Ordine o JOIN FETCH o.cliente JOIN FETCH o.imbarcazione WHERE o.id = :id")
    Optional<Ordine> findByIdWithDetails(Long id);
}
