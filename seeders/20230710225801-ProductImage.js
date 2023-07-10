'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'product_images',
      [
        {
          src: 'https://www.amazon.in/Zara-Printed-Round-Neck-Tshirt/dp/B07SK7FB6D',
          alt: 'black t-shirt on a man',
          product_id: '1',
        },
        {
          src: 'https://static.zara.net/photos///2023/V/0/2/p/4231/424/800/2/w/1024/4231424800_6_2_1.jpg?ts=1673523957924',
          alt: 'black t-shirt',
          product_id: '1',
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('product_images', { name: 'Zara' }, {});
  },
};
