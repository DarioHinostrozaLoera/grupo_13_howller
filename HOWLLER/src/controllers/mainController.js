const listaProductos = [
    {
        id:1,
        img: "img/products/01.jpg",
        titulo: "Homero Familiar",
        precio: "269",
        color: "rosa",
        descripción: "",
        
    },
    {
        id:2,
        img: "img/products/02.jpg",
        titulo: "Black Widow",
        precio: "249",
        color: "rojo",
        descripción: "",
        
    },
    {
        id:3,
        img: "img/products/03.jpg",
        titulo: "Sesamo Emojis",
        precio: "279",
        color: "blanco",
        descripción: "",
        
    },
    {
        id:4,
        img: "img/products/04.jpg",
        titulo: "Los Picapiedra",
        precio: "149",
        color: "negro",
        descripción: "",
        
    },

    {
        id:5,
        img: "img/products/05.jpg",
        titulo: "Otto man",
        precio: "269",
        color: "amarillo",
        descripción: "",
        
    },
    {
        id:6,
        img: "img/products/06.jpg",
        titulo: "Mundo Nick",
        precio: "279",
        color: "blanco",
        descripción: "",
        
    },
    {
        id:7,
        img: "img/products/07.jpg",
        titulo: "Stich Hawaii",
        precio: "249",
        color: "morado",
        descripción: "",
        
    },
    {
        id:8,
        img: "img/products/08.jpg",
        titulo: "The Flash",
        precio: "275",
        color: "rojo",
        descripción: "",
        
    },

];

const mainController = {
    index: (req, res) => {
        res.render('home' , {catalogo : listaProductos});
    },
    login: (req,res)=>{
        res.render('login')
    },
    cart: (req,res) =>{
        res.render('cart')
    }
}
module.exports = mainController;