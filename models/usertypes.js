'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    userTypes.hasMany(models.User,{foreignKey:"userTypeId"})
    }
  }
  userTypes.init({
    Type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userTypes',
  });
  return userTypes;
};