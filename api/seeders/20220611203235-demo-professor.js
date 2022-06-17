module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Professores', [{
      name: 'Shelly Reis',
      email: 'shellyreis2005@hotmail.com',
      password: 'Enlermaier0*',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Professores', null, {});
  }
};