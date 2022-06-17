'use strict';
module.exports = (sequelize, DataTypes) => {
  const Professores = sequelize.define('Professores', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Professores.associate = function(models) {
    Professores.hasMany(models.Students, {
      foreignKey: 'teacher_id'
    })
  }
  return Professores;
};