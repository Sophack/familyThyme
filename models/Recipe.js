//table definitions, seeds is optional if we want to create a full table 

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Recipe extends Model {}


Recipe.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        directions: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //the users can input directions to add/edit recipes
        directionsAdd: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                max: 800
            }          
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "recipe",
    },
);

module.exports = Recipe;

