sequenceDiagram
    participant browser
    participant server

    %% El usuario hace POST para crear la nota en la SPA
    browser->>server: POST /exampleapp/new_note_spa\nPayload: note="n4"
    activate server
    server-->>browser: 201 Created\n{"content":"n4","date":"2025-04-23"}
    deactivate server

    %% El cliente SPA actualiza la interfaz
    Note right of browser: spa.js recibe la respuesta\ny añade la nueva nota al listado\n—sin recargar nada—
