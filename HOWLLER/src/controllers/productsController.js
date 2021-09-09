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
    hombres: (req, res) => {
        let clase = listaProductos.filter((playera) => playera.categoria == "hombres");
        res.render('./products/hombres', {clase: clase})
    },
    mujeres: (req, res) => {
        let clase = listaProductos.filter((playera) => playera.categoria == "mujeres");
        res.render('./products/mujeres', {clase: clase})
    },
    ninas: (req, res) => {
        let clase = listaProductos.filter((playera) => playera.categoria == "niñas");
        res.render('./products/ninas', {clase: clase})
    },
    ninos: (req, res) => {
        let clase = listaProductos.filter((playera) => playera.categoria == "niños");
        res.render('./products/ninos', {clase: clase})
    },
    ofertas: (req, res) => {
        let clase = listaProductos.filter((playera) => playera.status == "en oferta");
        res.render('./products/ofertas', {clase: clase})
    },
    todos: (req, res) => {
        res.render('./products/todos', {clase: listaProductos})
    },
    create: (req, res) => {
        res.render('./users/add_product');
    },
    edit: (req, res) => {
        let id = req.params.id;
        let editProduct = listaProductos.find((product) => product.id == id);
        res.render('./users/edit_product', {editProduct});
    }
}

module.exports = mainController;