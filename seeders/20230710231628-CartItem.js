'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'cart_items',
      [
        {
          quantity: 3,
          cart_id: 1,
          product_id: 1,
        },
        {
          quantity: 2,
          cart_id: 1,
          product_id: 3,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('cart_items', { user_id: 1 }, {});
  },
};
