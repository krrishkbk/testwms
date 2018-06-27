"use strict";

module.exports = function (sequelize, DataTypes) {
    var brandmaster = sequelize.define("brandmaster", {
        Brandid: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        BrandName: {
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

    brandmaster.removeAttribute('id');
    return brandmaster;
};