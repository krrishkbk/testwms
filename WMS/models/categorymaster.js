"use strict";

module.exports = function (sequelize, DataTypes) {
    var categorymaster = sequelize.define("categorymaster", {
        CategoryID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CategoryName: {
            type: DataTypes.STRING
        },
        CreatedBy: {
            type: DataTypes.STRING
        },
        CreatedDate: {
            type: DataTypes.DATE
        },
        LastModifiedBy: {
            type: DataTypes.STRING
        },
        LastModifiedDate: {
            type: DataTypes.DATE
        } 
     
    }, { freezeTableName: true, timestamps: false });

    categorymaster.removeAttribute('id');
    return categorymaster;
};