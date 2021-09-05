const listaProductos = [
    {
        id:1,
        img: "/img/products/01/01-1.jpg",
        det01:"/img/products/01/01-2.png",
        det02:"/img/products/01/01-3.png",
        det03:"/img/products/01/01-4.png",
        det04:"/img/products/01/01-5.png",
        titulo: "Homero Familiar",
        precio: "269",
        color: "rosa",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque.",
        
    },
    {
        id:2,
        img: "/img/products/02/02-1.jpg",
        det01:"/img/products/02/02-2.png",
        det02:"/img/products/02/02-3.png",
        det03:"/img/products/02/02-4.png",
        det04:"/img/products/02/02-5.png",
        titulo: "Black Widow",
        precio: "249",
        color: "rojo",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque.",
        
    },
    {
        id:3,
        img: "/img/products/03/03-1.jpg",
        det01:"/img/products/03/03-2.png",
        det02:"/img/products/03/03-3.png",
        det03:"/img/products/03/03-4.png",
        det04:"/img/products/03/03-5.png",
        titulo: "Sesamo Emojis",
        precio: "279",
        color: "blanco",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque.",
        
    },
    {
        id:4,
        img: "/img/products/04/04-1.jpg",
        det01:"/img/products/04/04-2.png",
        det02:"/img/products/04/04-3.png",
        det03:"/img/products/04/04-4.png",
        det04:"/img/products/04/04-5.png",
        titulo: "Simpsons Japan",
        precio: "149",
        color: "azul",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque.",
        
    },

    {
        id:5,
        img: "/img/products/05/05-1.jpg",
        det01:"/img/products/05/05-2.png",
        det02:"/img/products/05/05-3.png",
        det03:"/img/products/05/05-4.png",
        det04:"/img/products/05/05-5.png",
        titulo: "Otto man",
        precio: "269",
        color: "amarillo",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque.",
        
    },
    {
        id:6,
        img: "/img/products/06/06-1.jpg",
        det01:"/img/products/06/06-2.png",
        det02:"/img/products/06/06-3.png",
        det03:"/img/products/06/06-4.png",
        det04:"/img/products/06/06-5.png",
        titulo: "Mundo Nick",
        precio: "279",
        color: "blanco",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque.",
        
    },
    {
        id:7,
        img: "/img/products/07/07-1.jpg",
        det01:"/img/products/07/07-2.png",
        det02:"/img/products/07/07-3.png",
        det03:"/img/products/07/07-4.png",
        det04:"/img/products/07/07-5.png",
        titulo: "Superman Black",
        precio: "249",
        color: "negro",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque.",
        
    },
    {
        id:8,
        img: "/img/products/08/08-1.jpg",
        det01:"/img/products/08/08-2.png",
        det02:"/img/products/08/08-3.png",
        det03:"/img/products/08/08-4.png",
        det04:"/img/products/08/08-5.png",
        titulo: "The Flash",
        precio: "275",
        color: "rojo",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos explicabo alias doloremque.",
        
    },

];
/* 
const categorias =[
    {
        categoria:"Hombres"
    },
    {
        categoria:"Mujeres"
    },
    {
        categoria:"Niñas"
    },
    {
        categoria:"Niños"
    },
    {
        categoria:"Ofertas"
    },


] */

const mainController = {
    index: (req, res) => {
        res.render('./products/home', {catalogo: listaProductos});
    },
    detail: (req, res) => {
        let playera = listaProductos.find((playera) => playera.id == req.params.productId);
        res.render('./products/detail_product', {playera: playera});
    },
    login: (req, res) => {
        res.render('./users/login')
    },
    cart: (req, res) => {
        let playeraC = listaProductos.find((playera) => playera.id == req.params.productId);
        res.render('./products/cart', {playeraC: playeraC});
    },
    form: (req, res) => {
        res.render('./users/forms');
    },
    categorie: (req, res) => {
       /*  let seccion = categorias.find ((secc) => secc.categoria == req.params.nomCategoria) */
        res.render('./products/categorie', {catalogo: listaProductos}, /* {seccion : seccion} */);
    }

}

module.exports = mainController;