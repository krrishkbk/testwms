"use strict";

module.exports = function (sequelize, DataTypes) {
    var productmeasurmentdetails = sequelize.define("productmeasurmentdetails", {
        AttributeID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        ProductId: {
            type: DataTypes.INTEGER
        },
        AttributeType: {
            type: DataTypes.TEXT
        },
        AttributeValue: {
            type: DataTypes.TEXT
        },
        IsActive: {
            type: DataTypes.BOOLEAN
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

    productmeasurmentdetails.removeAttribute('id');
    return productmeasurmentdetails;
};