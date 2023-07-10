'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'favorites',
      [
        {
          user_id: '1',
          product_id: '1',
        },
        {
          user_id: '1',
          product_id: '2',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'favorites',
      { user_id: 'Zara', product_id: '1' },
      {}
    );
  },
};
