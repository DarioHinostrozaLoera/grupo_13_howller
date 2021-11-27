const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carrito_compras', {
    idCARRITO_COMPRAS: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    precio_CARRITO_COMPRAS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    USUARIOS_id_USUARIOS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuarios',
        key: 'id_USUARIOS'
      }
    },
    PRODUCTOS_idPRODUCTOS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'idPRODUCTOS'
      }
    },
    PRODUCTOS_CATEGORIAS_idCATEGORIAS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'CATEGORIAS_idCATEGORIAS'
      }
    },
    PRODUCTOS_STATUS_idSTATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'STATUS_idSTATUS'
      }
    },
    PRODUCTOS_TALLAS_idTALLAS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'TALLAS_idTALLAS'
      }
    },
    PRODUCTOS_COLORES_idCOLORES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'COLORES_idCOLORES'
      }
    }
  }, {
    sequelize,
    tableName: 'carrito_compras',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCARRITO_COMPRAS" },
          { name: "USUARIOS_id_USUARIOS" },
          { name: "PRODUCTOS_idPRODUCTOS" },
          { name: "PRODUCTOS_CATEGORIAS_idCATEGORIAS" },
          { name: "PRODUCTOS_STATUS_idSTATUS" },
          { name: "PRODUCTOS_TALLAS_idTALLAS" },
          { name: "PRODUCTOS_COLORES_idCOLORES" },
        ]
      },
      {
        name: "fk_CARRITO_COMPRAS_USUARIOS1",
        using: "BTREE",
        fields: [
          { name: "USUARIOS_id_USUARIOS" },
        ]
      },
      {
        name: "fk_CARRITO_COMPRAS_PRODUCTOS1",
        using: "BTREE",
        fields: [
          { name: "PRODUCTOS_idPRODUCTOS" },
          { name: "PRODUCTOS_CATEGORIAS_idCATEGORIAS" },
          { name: "PRODUCTOS_STATUS_idSTATUS" },
          { name: "PRODUCTOS_TALLAS_idTALLAS" },
          { name: "PRODUCTOS_COLORES_idCOLORES" },
        ]
      },
    ]
  });
};
