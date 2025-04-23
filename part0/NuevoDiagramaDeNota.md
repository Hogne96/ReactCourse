sequenceDiagram
    participant Browser
    participant Server

    %% 1. Crear la nota
    Browser->>Server: POST /exampleapp/new_note  
    Note left of Browser: Payload: note=Prueba  
    activate Server
    Server-->>Browser: 302 Found  
    Note right of Server: Location: /exampleapp/notes  
    deactivate Server

    %% 2. Recarga de la página de notas
    Browser->>Server: GET /exampleapp/notes  
    activate Server
    Server-->>Browser: HTML document  
    deactivate Server

    %% 3. Carga de recursos estáticos
    Browser->>Server: GET /exampleapp/main.css  
    activate Server
    Server-->>Browser: CSS file  
    deactivate Server

    Browser->>Server: GET /exampleapp/main.js  
    activate Server
    Server-->>Browser: JavaScript file  
    deactivate Server

    %% 4. Obtención de datos actualizados
    Note right of Browser: main.js ejecuta fetch('/exampleapp/data.json')
    Browser->>Server: GET /exampleapp/data.json  
    activate Server
    Server-->>Browser: JSON array of notes (incluye "Prueba")  
    deactivate Server

    %% 5. Renderizado final
    Note right of Browser: El callback pinta la lista con la nueva nota
