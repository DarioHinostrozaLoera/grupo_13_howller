var DataTypes = require("sequelize").DataTypes;
var _carrito_compras = require("./carrito_compras");
var _categorias = require("./categorias");
var _colores = require("./colores");
var _productos = require("./productos");
var _status = require("./status");
var _tallas = require("./tallas");
var _usuarios = require("./usuarios");

function initModels(sequelize) {
  var carrito_compras = _carrito_compras(sequelize, DataTypes);
  var categorias = _categorias(sequelize, DataTypes);
  var colores = _colores(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var tallas = _tallas(sequelize, DataTypes);
  var usuarios = _usuarios(sequelize, DataTypes);

  productos.belongsTo(categorias, { as: "CATEGORIAS_idCATEGORIAS_categoria", foreignKey: "CATEGORIAS_idCATEGORIAS"});
  categorias.hasMany(productos, { as: "productos", foreignKey: "CATEGORIAS_idCATEGORIAS"});
  productos.belongsTo(colores, { as: "COLORES_idCOLORES_colore", foreignKey: "COLORES_idCOLORES"});
  colores.hasMany(productos, { as: "productos", foreignKey: "COLORES_idCOLORES"});
  carrito_compras.belongsTo(productos, { as: "PRODUCTOS_idPRODUCTOS_producto", foreignKey: "PRODUCTOS_idPRODUCTOS"});
  productos.hasMany(carrito_compras, { as: "carrito_compras", foreignKey: "PRODUCTOS_idPRODUCTOS"});
  carrito_compras.belongsTo(productos, { as: "PRODUCTOS_CATEGORIAS_idCATEGORIAS_producto", foreignKey: "PRODUCTOS_CATEGORIAS_idCATEGORIAS"});
  productos.hasMany(carrito_compras, { as: "PRODUCTOS_CATEGORIAS_idCATEGORIAS_carrito_compras", foreignKey: "PRODUCTOS_CATEGORIAS_idCATEGORIAS"});
  carrito_compras.belongsTo(productos, { as: "PRODUCTOS_STATUS_idSTATUS_producto", foreignKey: "PRODUCTOS_STATUS_idSTATUS"});
  productos.hasMany(carrito_compras, { as: "PRODUCTOS_STATUS_idSTATUS_carrito_compras", foreignKey: "PRODUCTOS_STATUS_idSTATUS"});
  carrito_compras.belongsTo(productos, { as: "PRODUCTOS_TALLAS_idTALLAS_producto", foreignKey: "PRODUCTOS_TALLAS_idTALLAS"});
  productos.hasMany(carrito_compras, { as: "PRODUCTOS_TALLAS_idTALLAS_carrito_compras", foreignKey: "PRODUCTOS_TALLAS_idTALLAS"});
  carrito_compras.belongsTo(productos, { as: "PRODUCTOS_COLORES_idCOLORES_producto", foreignKey: "PRODUCTOS_COLORES_idCOLORES"});
  productos.hasMany(carrito_compras, { as: "PRODUCTOS_COLORES_idCOLORES_carrito_compras", foreignKey: "PRODUCTOS_COLORES_idCOLORES"});
  productos.belongsTo(status, { as: "STATUS_idSTATUS_status", foreignKey: "STATUS_idSTATUS"});
  status.hasMany(productos, { as: "productos", foreignKey: "STATUS_idSTATUS"});
  productos.belongsTo(tallas, { as: "TALLAS_idTALLAS_talla", foreignKey: "TALLAS_idTALLAS"});
  tallas.hasMany(productos, { as: "productos", foreignKey: "TALLAS_idTALLAS"});
  carrito_compras.belongsTo(usuarios, { as: "USUARIOS_id_USUARIOS_usuario", foreignKey: "USUARIOS_id_USUARIOS"});
  usuarios.hasMany(carrito_compras, { as: "carrito_compras", foreignKey: "USUARIOS_id_USUARIOS"});

  return {
    carrito_compras,
    categorias,
    colores,
    productos,
    status,
    tallas,
    usuarios,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
