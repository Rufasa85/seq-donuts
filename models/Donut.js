const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Donut extends Model { }

Donut.init(
    {
        flavor:{
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
        isTasty:{
            type:DataTypes.BOOLEAN
        }

    },
    {
        sequelize,

    }
);

module.exports = Donut;