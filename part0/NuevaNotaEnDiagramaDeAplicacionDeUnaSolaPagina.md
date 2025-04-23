sequenceDiagram
    participant Browser
    participant Server

    %% 1. Crear la nota en la SPA
    Browser->>Server: POST /exampleapp/new_note_spa  
    Note left of Browser: Payload JSON:  
    Note left of Browser: {  
    Note left of Browser:  content: "prueba carga spa",  
    Note left of Browser:  date: "2025-04-23T17:38:07.637Z"  
    Note left of Browser: }  
    activate Server
    Server-->>Browser: 201 Created  
    Note right of Server: Response JSON:  
    Note right of Server: {"content":"prueba carga spa","date":"2025-04-23T17:38:07.637Z"}  
    deactivate Server

    %% 2. Actualización en el cliente
    Note right of Browser: spa.js recibe la respuesta  
    Note right of Browser: Añade la nueva nota al DOM  
    Note right of Browser: (sin recargar nada)
