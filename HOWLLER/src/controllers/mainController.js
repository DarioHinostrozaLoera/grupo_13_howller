const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const listaProductos = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {
    index: (req, res) => {
        res.render('./products/home', {catalogo: listaProductos});
    },
    login: (req, res) => {
        res.render('./users/login')
    },
    /*search: (req, res) => {
    *  your code here!
    * } */

}

module.exports = mainController;