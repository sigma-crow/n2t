module.exports = {
  up: async (queryInterface, Sequelize) => {},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    await queryInterface.bulkDelete('auths', null, {});
    await queryInterface.bulkDelete('categories', null, {});
    await queryInterface.bulkDelete('folders', null, {});
    await queryInterface.bulkDelete('notes', null, {});
    await queryInterface.bulkDelete('templates', null, {});
  },
};
