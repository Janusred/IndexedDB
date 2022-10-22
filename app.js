
// indexedDB: Reforzamiento
let request = window.indexedDB.open('mi-database', 2);
request.onupgradeneeded = event => {
    console.log('Actualización de BD');
    let db = event.target.result;
    db.createObjectStore('heroes', {
        keyPath: 'id'
    });
};


