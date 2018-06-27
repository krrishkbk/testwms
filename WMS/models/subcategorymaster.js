"use strict";

module.exports = function (sequelize, DataTypes) {
    var subcategorymaster = sequelize.define("subcategorymaster", {
        SubCategoryID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        CategoryID: {
            type: DataTypes.INTEGER
        },
        SubCategoryName: {
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

    subcategorymaster.removeAttribute('id');
    return subcategorymaster;
};