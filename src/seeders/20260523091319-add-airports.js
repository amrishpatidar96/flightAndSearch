'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Delhi Airport 1',
        address: 'Address 1',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delhi Airport 2',
        address: 'Address 1',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Delhi Airport 3',
        address: 'Address 1',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Delhi Airport 4',
        address: 'Address 1',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: 'Delhi Airport 5',
        address: 'Address 1',
        cityId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bangrole Airport 1',
        address: 'Address 1',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bangrole Airport 2',
        address: 'Address 1',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bangrole Airport 3',
        address: 'Address 1',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bangrole Airport 4',
        address: 'Address 1',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bangrole Airport 5',
        address: 'Address 1',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bangrole Airport 6',
        address: 'Address 1',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bangrole Airport 7',
        address: 'Address 1',
        cityId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
