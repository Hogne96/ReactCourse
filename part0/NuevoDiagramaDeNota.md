sequenceDiagram
    participant browser
    participant server

    %% El usuario hace POST para crear la nota
    browser->>server: POST /exampleapp/new_note\nPayload: note="n4"
    activate server
    server-->>browser: 302 Found (Location: /exampleapp/notes)
    deactivate server

    %% El navegador sigue la redirección y recarga la página de notas
    browser->>server: GET /exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server

    %% Se cargan recursos estáticos
    browser->>server: GET /exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /exampleapp/main.js
    activate server
    server-->>browser: JavaScript file
    deactivate server

    Note right of browser: El navegador ejecuta main.js\
y dispara la petición para obtener los datos actualizados

    %% Se vuelve a obtener el JSON con todas las notas
    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: JSON array of notes
    deactivate server

    Note right of browser: El callback renderiza la nueva nota en la lista
