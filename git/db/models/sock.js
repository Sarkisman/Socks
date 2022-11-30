const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sock extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    }
  }
  Sock.init({
    color: DataTypes.STRING,
    pattern: DataTypes.STRING,
    img: DataTypes.STRING,
    favorSt: DataTypes.BOOLEAN,
    bascetSt: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Sock',
  });
  return Sock;
};
