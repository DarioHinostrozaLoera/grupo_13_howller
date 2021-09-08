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
const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const listaProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {

    detail: (req, res) => {
        let playera = listaProductos.find((playera) => playera.id == req.params.productId);
        res.render('./products/detail_product', {playera: playera});
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