'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'products',
      [
        {
          name: 'Zara simple T-shirt',
          tittle: 'Zara T-shirt',
          description: 'casual T-shirt ',
          price: 19.99,
          quantity: 100,
          rating: 4.7,
          discount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
          brand_id: 1,
          category_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete(
      'products',
      { name: 'Zara simple T-shirt' },
      {}
    );
  },
};
