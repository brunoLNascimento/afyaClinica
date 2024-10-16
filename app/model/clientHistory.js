const Sequelize = require('sequelize')
, sequelize = require('../config/sequelize');

const clientHistory = sequelize.define( 
  'clientHistory',
  {
    id: { type: Sequelize.NUMBER, primaryKey: true, allowNull: false, autoIncrement: true },
    clientId: { type: Sequelize.NUMBER, allowNull: false},
    date: { type: Sequelize.DATE, allowNull: false },
    description: { type: Sequelize.STRING, length: 500, allowNull: false }
  },{
    freezeTableName:true, 
    timestamps:false
});

exports.getClientHistory = function() { return clientHistory }