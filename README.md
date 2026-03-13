Obiettivo
Creare un backend REST in Java Spring Boot per il gestionale Angular, con CRUD per i moduli principali e persistenza locale pronta per evolvere.
Stato attuale
Il frontend Angular esiste e usa dati mock in memoria. Java 21 è disponibile, ma Maven/Gradle non sono installati globalmente; useremo Maven Wrapper incluso nel progetto Spring Boot.
Proposta tecnica
Creare progetto cantiere-backend in C:\Users\HP\AngularResponsiveProj\cantiere-backend con Spring Boot 3.x
Dipendenze: Spring Web, Spring Data JPA, Validation, H2, Lombok (opzionale)
Configurare H2 file-based (jdbc:h2:file:./data/cantiere-db) per persistenza tra riavvii
Configurare CORS per http://localhost:4200
Implementare entità, repository, service e controller per: clienti, imbarcazioni, ordini
Esporre endpoint CRUD REST /api/clienti, /api/imbarcazioni, /api/ordini
Aggiungere seed iniziale dati (solo se DB vuoto)
Verificare avvio backend e test rapido endpoint
Estensione successiva
Dopo il primo rilascio, estendere con produzione, magazzino, fornitori, personale e collegare il frontend Angular da MockDataService a HttpClient.
