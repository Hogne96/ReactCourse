sequenceDiagram
    participant Browser
    participant Server

    %% 1. Carga inicial de la SPA
    Browser->>Server: GET /exampleapp/spa  
    Note left of Browser: Sin payload  
    activate Server
    Server-->>Browser: 200 OK (HTML del “shell” SPA)  
    deactivate Server

    %% 2. Carga de estilos y lógica
    Browser->>Server: GET /exampleapp/main.css  
    activate Server
    Server-->>Browser: CSS file  
    deactivate Server

    Browser->>Server: GET /exampleapp/spa.js  
    activate Server
    Server-->>Browser: JavaScript file (lógica SPA)  
    deactivate Server

    %% 3. Inicio de la aplicación en el cliente
    Note right of Browser: spa.js arranca la aplicación sin recargar la página

    %% 4. Petición de datos
    Browser->>Server: GET /exampleapp/data.json  
    activate Server
    Server-->>Browser: JSON array of notes  
    deactivate Server

    %% 5. Renderizado dinámico
    Note right of Browser: El SPA pinta la lista de notas usando los datos recibidos
