'use strict';
module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define('Students', {
    nome: DataTypes.STRING,
    price: DataTypes.STRING,
    data_inicio: DataTypes.STRING,
    type: DataTypes.STRING
  }, {});
  Students.associate = function(models) {
    Students.belongsTo(models.Professores, {
      foreignKey: 'teacher_id'
    })
  }
  return Students;
};