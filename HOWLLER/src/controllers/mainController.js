const listaProductos = [
    {
        id:1,
        img: "/img/products/01.jpg",
        titulo: "Homero Familiar",
        precio: "269",
        color: "rosa",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque atque error quis voluptas eveniet tempora? Obcaecati voluptates adipisci repellendus possimus sunt illum dolore cum. Asperiores, iste quos.",
        
    },
    {
        id:2,
        img: "/img/products/02.jpg",
        titulo: "Black Widow",
        precio: "249",
        color: "rojo",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque atque error quis voluptas eveniet tempora? Obcaecati voluptates adipisci repellendus possimus sunt illum dolore cum. Asperiores, iste quos.",
        
    },
    {
        id:3,
        img: "/img/products/03.jpg",
        titulo: "Sesamo Emojis",
        precio: "279",
        color: "blanco",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque atque error quis voluptas eveniet tempora? Obcaecati voluptates adipisci repellendus possimus sunt illum dolore cum. Asperiores, iste quos.",
        
    },
    {
        id:4,
        img: "/img/products/04.jpg",
        titulo: "Los Picapiedra",
        precio: "149",
        color: "negro",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque atque error quis voluptas eveniet tempora? Obcaecati voluptates adipisci repellendus possimus sunt illum dolore cum. Asperiores, iste quos.",
        
    },

    {
        id:5,
        img: "/img/products/05.jpg",
        titulo: "Otto man",
        precio: "269",
        color: "amarillo",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque atque error quis voluptas eveniet tempora? Obcaecati voluptates adipisci repellendus possimus sunt illum dolore cum. Asperiores, iste quos.",
        
    },
    {
        id:6,
        img: "/img/products/06.jpg",
        titulo: "Mundo Nick",
        precio: "279",
        color: "blanco",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque atque error quis voluptas eveniet tempora? Obcaecati voluptates adipisci repellendus possimus sunt illum dolore cum. Asperiores, iste quos.",
        
    },
    {
        id:7,
        img: "/img/products/07.jpg",
        titulo: "Stich Hawaii",
        precio: "249",
        color: "morado",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque atque error quis voluptas eveniet tempora? Obcaecati voluptates adipisci repellendus possimus sunt illum dolore cum. Asperiores, iste quos.",
        
    },
    {
        id:8,
        img: "/img/products/08.jpg",
        titulo: "The Flash",
        precio: "275",
        color: "rojo",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque atque error quis voluptas eveniet tempora? Obcaecati voluptates adipisci repellendus possimus sunt illum dolore cum. Asperiores, iste quos.",
        
    },

];

const mainController = {
    index: (req, res) => {
        res.render('home', {catalogo: listaProductos});
    },
    detail: (req, res) => {
        let playera = listaProductos.find((playera) => playera.id == req.params.productId);
        res.render('detail_product', {playera: playera});
    },
    login: (req, res) => {
        res.render('login')
    },
    cart: (req, res) => {
        let playeraC = listaProductos.find((playera) => playera.id == req.params.productId);
        res.render('cart', {playeraC: playeraC});

    }
}

module.exports = mainController;