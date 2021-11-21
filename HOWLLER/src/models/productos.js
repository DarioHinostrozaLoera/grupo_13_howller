const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    idPRODUCTOS: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_PRODUCTOS: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcion_PRODUCTOS: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    precio_PRODUCTOS: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    imagen_PRODUCTOS: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    det01_img_PRODUCTOS: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    det02_img_PRODUCTOS: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    det03_img_PRODUCTOS: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    det04_img_PRODUCTOS: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    CATEGORIAS_idCATEGORIAS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'categorias',
        key: 'idCATEGORIAS'
      }
    },
    STATUS_idSTATUS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'status',
        key: 'idSTATUS'
      }
    },
    TALLAS_idTALLAS: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'tallas',
        key: 'idTALLAS'
      }
    },
    COLORES_idCOLORES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'colores',
        key: 'idCOLORES'
      }
    }
  }, {
    sequelize,
    tableName: 'productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPRODUCTOS" },
          { name: "CATEGORIAS_idCATEGORIAS" },
          { name: "STATUS_idSTATUS" },
          { name: "TALLAS_idTALLAS" },
          { name: "COLORES_idCOLORES" },
        ]
      },
      {
        name: "fk_PRODUCTOS_CATEGORIAS",
        using: "BTREE",
        fields: [
          { name: "CATEGORIAS_idCATEGORIAS" },
        ]
      },
      {
        name: "fk_PRODUCTOS_STATUS1",
        using: "BTREE",
        fields: [
          { name: "STATUS_idSTATUS" },
        ]
      },
      {
        name: "fk_PRODUCTOS_TALLAS1",
        using: "BTREE",
        fields: [
          { name: "TALLAS_idTALLAS" },
        ]
      },
      {
        name: "fk_PRODUCTOS_COLORES1",
        using: "BTREE",
        fields: [
          { name: "COLORES_idCOLORES" },
        ]
      },
    ]
  });
};
