'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'T-shirts',
          description: 'no need to describe a T-shirts category :)',
          img: 'https://blog.treasurie.com/types-of-t-shirts/',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', { name: 'T-shirts' }, {});
  },
};
