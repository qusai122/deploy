'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'brands',
      [
        {
          name: 'Zara',
          description: 'clothing company',
          img: 'https://logos-world.net/zara-logo/',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('brands', { name: 'Zara' }, {});
  },
};
