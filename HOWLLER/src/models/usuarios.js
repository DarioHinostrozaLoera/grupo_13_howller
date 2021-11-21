const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuarios', {
    id_USUARIOS: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre_USUARIOS: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    apellido_USUARIO: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    correo_USUARIOS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    'contraseña_USUARIOS': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    imagen_USUARIOS: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_USUARIOS" },
        ]
      },
    ]
  });
};
