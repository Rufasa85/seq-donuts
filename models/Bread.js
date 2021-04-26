const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Bread extends Model { }

Bread.init(
    {
        style:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price: {
            type:DataTypes.DECIMAL,
            allowNull:false
        },
        quantity:{
            type:DataTypes.INTEGER,
            defaultValue:13
        },
        isPreSliced:{
            type:DataTypes.BOOLEAN
        }
    },
    {
        sequelize,

    }
);

module.exports = Bread;