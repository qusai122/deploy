'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'addresses',
      [
        {
          full_name: 'Qusai Issa',
          mobile_number: '0594170607',
          street: 'main street',
          state: 'westBank',
          city: 'Bethlehem',
          pin_code: 'p167',
          is_default: 1,
          user_id: 1,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('addresses', { user_id: 1 }, {});
  },
};
