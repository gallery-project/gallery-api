'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorates extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  favorates.init({
    userId: DataTypes.INTEGER,
    picId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'favorates',
  });
  return favorates;
};