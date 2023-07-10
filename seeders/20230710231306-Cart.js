'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'carts',
      [
        {
          sub_total: 0,
          discount: 0,
          delivery_fee: 0,
          is_ordered: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          user_id: 1,
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
    return queryInterface.bulkDelete('carts', { user_id: 1 }, {});
  },
};
