const filtrarProductos = require('../js/productos');

const productos = [
    {
        "id": "abrigo-01",
        "titulo": "Campera 1",
        "imagen": "./img/campera-01.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-02",
        "titulo": "Campera 2",
        "imagen": "./img/campera-02.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-03",
        "titulo": "Campera 3",
        "imagen": "./img/campera-03.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-04",
        "titulo": "Campera 4",
        "imagen": "./img/campera-04.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "abrigo-05",
        "titulo": "Campera 5",
        "imagen": "./img/campera-05.jpg",
        "categoria": "camperas",
        "precio": 1000
    },
    {
        "id": "camiseta-01",
        "titulo": "Remera 1",
        "imagen": "./img/remera-01.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-02",
        "titulo": "Remera 2",
        "imagen": "./img/remera-02.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-03",
        "titulo": "Remera 3",
        "imagen": "./img/remera-03.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-04",
        "titulo": "Remera 4",
        "imagen": "./img/remera-04.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-05",
        "titulo": "Remera 5",
        "imagen": "./img/remera-05.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-06",
        "titulo": "Remera 6",
        "imagen": "./img/remera-06.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-07",
        "titulo": "Remera 7",
        "imagen": "./img/remera-07.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "camiseta-08",
        "titulo": "Remera 8",
        "imagen": "./img/remera-08.jpg",
        "categoria": "remeras",
        "precio": 1000
    },
    {
        "id": "pantalon-01",
        "titulo": "Pantalón 01",
        "imagen": "./img/pantalon-01.png",
        "categoria": "pantalones",
        "precio": 1000
    },
    {
        "id": "pantalon-02",
        "titulo": "Pantalón 02",
        "imagen": "./img/pantalon-02.png",
        "categoria": "pantalones",
        "precio": 1000
    },
    {
        "id": "pantalon-03",
        "titulo": "Pantalón 03",
        "imagen": "./img/pantalon-03.png",
        "categoria": "pantalones",
        "precio": 1000
    },
    {
        "id": "pantalon-04",
        "titulo": "Pantalón 04",
        "imagen": "./img/pantalon-04.png",
        "categoria": "pantalones",
        "precio": 1000
    },
    {
        "id": "pantalon-05",
        "titulo": "Pantalón 05",
        "imagen": "./img/pantalon-05.png",
        "categoria": "pantalones",
        "precio": 1000
    }
];


// Escribir los tests debajo

// Verificar que la funcion de filtrarProductos para 'Todos los productos" los muestre sin importar su categoria
//    resultado esperado: se visualizan todos los art sin problema

//No existe la funcionalidad traer todos



// Verificar que la funcion de filtrarProductos para 'Todos los productos" muestre los 18 articulos en total sin coincidencia de nombres
//    resultado esperado: se visualizan todos los art sin problema


//No existe la funcionbnalidad traer todos



// Verificar que la funcion de filtrarProductos para Camperas muestre todos sin importar su categoria
//    resultado esperado: se visualizan los articulos de la categora Campera.

test('Filtro productos de la categoria campera',() => {
    const valorObtenido = filtrarProductos(productos,'Campera');
    valorObtenido.forEach(producto => {
        expect(producto.categoria).toBe('Campera');
    });
});

// Verificar que la funcion de filtrarProductos para Pantalones muestre todos sin importar su categoria
//    resultado esperado: se visualizan los articulos de la categora Pantalones.

test('Filtro productos de la categoria pantalon',() => {
    const valorObtenido = filtrarProductos(productos,'Pantalon');
    valorObtenido.forEach(producto => {
        expect(producto.categoria).toBe('Pantalon');
    });
});

// Verificar que la funcion de filtrarProductos para Remeras muestre todos sin importar su categoria
//    resultado esperado: se visualizan los articulos de la categora Remeras.

test('Filtro productos de la categoria remeras',() => {
    const valorObtenido = filtrarProductos(productos,'Remeras');
    valorObtenido.forEach(producto => {
        expect(producto.categoria).toBe('Remeras');
    });
});

// Verificar que la funcion de filtrarProductos para Todos los productos muestre todos sin importar su categoria
//     resultado: no se visualiza nada, arroja un array vacio de productos

//no existe funcionalidad de todos los productos



