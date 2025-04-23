sequenceDiagram
    participant browser
    participant server

    %% Solicitud inicial de la página SPA
    browser->>server: GET /exampleapp/spa
    activate server
    server-->>browser: HTML document (SPA shell)
    deactivate server

    %% Carga de recursos estáticos
    browser->>server: GET /exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET /exampleapp/spa.js
    activate server
    server-->>browser: JavaScript file (SPA logic)
    deactivate server

    Note right of browser: El navegador ejecuta spa.js\
y arranca la aplicación de una sola página

    %% Petición de datos
    browser->>server: GET /exampleapp/data.json
    activate server
    server-->>browser: JSON array of notes
    deactivate server

    Note right of browser: El SPA renderiza la lista de notas sin recargar la página
