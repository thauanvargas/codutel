'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
      return queryInterface.createTable('spots', { 
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        user: {
          type: DataTypes.INTEGER,
          references: {
            model: "users",
            key: "id",
          },
          onDelete: 'CASCADE',
        },
        thumbnail: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        techs: {
          allowNull: false,
          type: DataTypes.STRING,
          // get() {
          //   return this.getDataValue('techs').split(',')
          // },
          // set(val) {
          //   this.setDataValue('techs',val.join(','));
          // },
        },
        company: {
          allowNull: false,
          type: DataTypes.STRING
        },
        price: {
          allowNull: false,
          type: DataTypes.INTEGER,
        },
        active: {
          allowNull: false,
          type: DataTypes.BOOLEAN,
          defaultValue: false
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        
      });
  },

  down: (queryInterface, DataTypes) => {
      return queryInterface.dropTable('spots');
  }
};
